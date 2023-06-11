import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/shared/service/client.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {
  clientForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private clientService: ClientService) {
    this.clientForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    });
  }
  onSubmit() {
    if (this.clientForm.valid) {
      const client = this.clientForm.value;
      this.clientService.loginClient(client).subscribe(
        res => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/cliente/produto']);
          console.log(res);
        }
      )
    }
  }

}
