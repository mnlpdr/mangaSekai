import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterVendor } from '../models/registerVendor.model';
import { LoginVendor } from '../models/loginVendor.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(private http: HttpClient) { }

  registerVendor(vendor: RegisterVendor) {

    return this.http.post('http://localhost:3000/vendor/register', vendor);
  }
  loginVendor(vendor: LoginVendor) {
    return this.http.post('http://localhost:3000/vendor/login', vendor);
  }
}
