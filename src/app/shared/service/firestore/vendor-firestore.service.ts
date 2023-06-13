import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import { VendorFirestore } from '../../models/firestore/registerVendorFirestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { MangaViewFirestore } from '../../models/firestore/registerProductFirestore';

@Injectable({
  providedIn: 'root'
})
export class VendorFirestoreService {
  collectionVendor: AngularFirestoreCollection<VendorFirestore>;
  NAME_COLLECTION = 'vendor';

  constructor(private angularFirestore: AngularFirestore) { 
    this.collectionVendor = angularFirestore.collection(this.NAME_COLLECTION);
  }
  registerVendor(vendor: VendorFirestore): Observable<object> {
    delete vendor.id;
    return from(this.collectionVendor.add({...vendor}));
  }
  LoginVendor(email: string, password: string): Observable<VendorFirestore | undefined> {
    return this.angularFirestore.collection(this.NAME_COLLECTION, ref => ref.where('email', '==', email).where('password', '==', password)).get().pipe(
      map(result => {
        if (result.docs.length == 0) {
          return undefined;
        }
        const doc = result.docs[0];
        const data = doc.data() as VendorFirestore;
        const id = doc.id;
        localStorage.setItem('vendor', doc.id);
        return new VendorFirestore(id, data);
        
        // Do something with data and id
        
      })
    );
  } 
  getAllProductSold(id: string): Observable<Array<MangaViewFirestore>> {
    return this.collectionVendor.doc(id).collection('sold').get().pipe(
      map(result => {
        return result.docs.map(doc => {
          const data = doc.data();
          const id = doc.id;
          return new MangaViewFirestore(id, data);
        });
      })
    );
  }
  addProductToSold(id: string, product: MangaViewFirestore): Observable<object> {
    return from(this.collectionVendor.doc(id).collection('sold').add({...product}));
  }
}
