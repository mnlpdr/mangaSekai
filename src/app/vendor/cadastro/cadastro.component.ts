import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorFirestore } from 'src/app/shared/models/firestore/registerVendorFirestore';
import { VendorFirestoreService } from 'src/app/shared/service/firestore/vendor-firestore.service';
import { VendorService } from 'src/app/shared/service/vendor.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  vendorForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private vendorService: VendorFirestoreService) {
    this.vendorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      description: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ0-9 ,()]+$')]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    });
  }

  onSubmit() {
    if (this.vendorForm.valid) {
      const vendor = this.vendorForm.value;
      if (vendor.password === vendor.confirmPassword) {
        const vendorFirestore: VendorFirestore = {
          name: vendor.name,
          email: vendor.email,
          description: vendor.description,
          password: vendor.password,
          products: [],
          sold: []
        }


        this.vendorService.registerVendor(vendorFirestore).subscribe(
          res => {
            this.router.navigate(['login/vendedor']);
            console.log(res);
        })
      }
      else {
        alert('Password and Confirm Password must be same');
      }
    }
  }
}
