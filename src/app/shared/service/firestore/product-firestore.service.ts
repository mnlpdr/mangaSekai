import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { MangaViewFirestore } from '../../models/firestore/registerProductFirestore';

@Injectable({
  providedIn: 'root'
})
export class ProductFirestoreService {
  collectionProduct: AngularFirestoreCollection<MangaViewFirestore>;
  NAME_COLLECTION = 'products';


  constructor(private angularFirestore: AngularFirestore) { 
    this.collectionProduct = angularFirestore.collection(this.NAME_COLLECTION);
  }
  registerProduct(product: MangaViewFirestore): Observable<object> {
    delete product.id;
    return from(this.collectionProduct.add({...product}));
  }
  getProductById(id: string): Observable<MangaViewFirestore> {
    return this.collectionProduct.doc(id).get().pipe(
      map(result => {
        const data = result.data() as MangaViewFirestore;
        const id = result.id;
        return new MangaViewFirestore(id, data);
      })
    )
  }
  updateProduct(manga: MangaViewFirestore): Observable<void> {
    // removendo id pois não vamos guardar nos dados do documento, mas sim usar apenas como id para recuperar o documento
    const id = manga.id;
    delete manga.id;
    return from(this.collectionProduct.doc(id).update({...manga}));
  }
  getProductOfVendor(idVendor: string): Observable<Array<MangaViewFirestore>> {
    return this.angularFirestore.collection<MangaViewFirestore>(this.NAME_COLLECTION, ref => ref.where('vendor', '==', idVendor)).get().pipe(
      map(result => {
        return result.docs.map(doc => {
          const data = doc.data();
          const id = doc.id;
          return new MangaViewFirestore(id, data);
        })
      })
    )
  }

  deleteProduct(id: string): Observable<void> {
    return from(this.collectionProduct.doc(id).delete());
  }

  getAllProduct(): Observable<Array<MangaViewFirestore>> {
    return this.collectionProduct.get().pipe(
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
