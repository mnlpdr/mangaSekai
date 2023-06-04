import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VendorService } from 'src/app/shared/service/vendor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  vendorForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private vendorService: VendorService) {
    this.vendorForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    });
  }
  onSubmit() {
    if (this.vendorForm.valid) {
      const vendor = this.vendorForm.value;
        this.vendorService.loginVendor(vendor).subscribe(
          res => {
            this.router.navigate(['/manga']);
            console.log(res);
      })
    }
  }
}
