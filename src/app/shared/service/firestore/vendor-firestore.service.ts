import { Injectable } from '@angular/core';
import {from, Observable} from 'rxjs';
import { VendorFirestore } from '../../models/firestore/registerVendorFirestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';

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
  LoginVendor(email: string, password: string): Observable<VendorFirestore> {
    return this.angularFirestore.collection(this.NAME_COLLECTION, ref => ref.where('email', '==', email).where('password', '==', password)).get().pipe(
      map(result => {
        const doc = result.docs[0];
        const data = doc.data() as VendorFirestore;
        const id = doc.id;
        return new VendorFirestore(id, data);
        
        // Do something with data and id
        
      })
    )
  }
}
