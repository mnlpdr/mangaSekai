import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientFirestoreService } from 'src/app/shared/service/firestore/client-firestore.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {
  clientForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private clientService: ClientFirestoreService) {
    this.clientForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    });
  }
  onSubmit() {
    if (this.clientForm.valid) {
      const client = this.clientForm.value;
      this.clientService.LoginClient(client.email, client.password).subscribe(
        res => {
          //localStorage.setItem('token', res.token);
          localStorage.setItem('client', res.id || "");
          this.router.navigate(['/cliente/produto']);
          console.log(res);
        }
      )
    }
  }

}
