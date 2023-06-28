import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/shared/service/client.service';
import { MensageService } from 'src/app/shared/service/mensage.service';

@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.component.html',
  styleUrls: ['./login-cliente.component.css']
})
export class LoginClienteComponent {
  clientForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private clientService: ClientService, private messageService: MensageService) {
    this.clientForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    });
  }
  onSubmit() {
    if (this.clientForm.valid) {
      const client = this.clientForm.value;
      this.clientService.loginClient(client.email, client.password).subscribe(
        res => {
          if (res) {
          //localStorage.setItem('token', res.token);
            localStorage.setItem('client', res.id.toString());
            this.router.navigate(['/cliente/produto']);
          }
          else {
            this.messageService.error('Usuário ou senha inválidos', 'Erro');
          }
        }
      )
    }
  }
}
