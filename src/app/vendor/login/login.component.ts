import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MensageService } from 'src/app/shared/service/mensage.service';
import { VendorService } from 'src/app/shared/service/vendor.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  vendorForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private vendorService: VendorService, private messageService: MensageService) {
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
          if (res) {
            if (res.id != undefined) {
              localStorage.setItem('id', res.id.toString());
              this.router.navigate(['/manga']);
            }
          }
          else {
            this.messageService.error('Usuário ou senha inválidos', 'Erro');

          }
        }
      )
    }
  }
}
