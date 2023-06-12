import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import {from, Observable} from 'rxjs';
import { ClientFirestore } from '../../models/firestore/registerClientFirestore';
import { MangaViewFirestore } from '../../models/firestore/registerProductFirestore';
import { VendorFirestoreService } from './vendor-firestore.service';

@Injectable({
  providedIn: 'root'
})
export class ClientFirestoreService {
  collectionClient: AngularFirestoreCollection<ClientFirestore>;
  NAME_COLLECTION = 'client';

  constructor(private angularFirestore: AngularFirestore, private vendorFirestoreService: VendorFirestoreService) { 
    this.collectionClient = angularFirestore.collection(this.NAME_COLLECTION);
  }
  registerClient(client: ClientFirestore): Observable<object> {
    delete client.id;
    return from(this.collectionClient.add({...client}));
  }
  LoginClient(email: string, password: string): Observable<ClientFirestore> {
    return this.angularFirestore.collection(this.NAME_COLLECTION, ref => ref.where('email', '==', email).where('password', '==', password)).get().pipe(
      map(result => {
        const doc = result.docs[0];
        const data = doc.data() as ClientFirestore;
        const id = doc.id;
        localStorage.setItem('client', doc.id);
        return new ClientFirestore(id, data);
        // Do something with data and id
      })
    )
  }

  AddProductToShoppingCart(idClient: string, product: MangaViewFirestore): Observable<object> {
    return from(this.collectionClient.doc(idClient).collection('shoppingCart').add({...product}));
  }

  getAllProductShoppingCart(idClient: string): Observable<Array<MangaViewFirestore>> {
    return this.collectionClient.doc(idClient).collection('shoppingCart').get().pipe(
      map(result => {
        return result.docs.map(doc => {
          const data = doc.data();
          const id = doc.id;
          return new MangaViewFirestore(id, data);
        });
      })
    );
  }
  deleteProductShoppingCart(idClient: string, idProduct: string): Observable<void> {
    return from(this.collectionClient.doc(idClient).collection('shoppingCart').doc(idProduct).delete());
  }

  addProductToCheckout(idClient: string, product: MangaViewFirestore): Observable<object> {
    if (product.vendor) {
      this.vendorFirestoreService.addProductToSold(product.vendor, product);

    }
    return from(this.collectionClient.doc(idClient).collection('checkout').add({...product}));
  }

  getAllProductCheckout(idClient: string): Observable<Array<MangaViewFirestore>> {
    return this.collectionClient.doc(idClient).collection('checkout').get().pipe(
      map(result => {
        return result.docs.map(doc => {
          const data = doc.data();
          const id = doc.id;
          return new MangaViewFirestore(id, data);
        });
      })
    );
  }

}
