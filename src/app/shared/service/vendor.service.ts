import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterVendor } from '../models/registerVendor.model';
import { LoginVendor } from '../models/loginVendor.model';
import { Token } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  URL = 'http://localhost:3000/vendor';

  constructor(private http: HttpClient) { }
  

  registerVendor(vendor: RegisterVendor) {

    return this.http.post(`${this.URL}/cadastro`, vendor);
  }
  loginVendor(vendor: LoginVendor) {
    return this.http.post<Token>(`${this.URL}/login`,vendor);
  }
}
