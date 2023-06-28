import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/shared/service/client.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {
  clientForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private clientService: ClientService) {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50), Validators.pattern('^[a-zA-ZÀ-ÿ ]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      const client = this.clientForm.value;
      if (client.password === client.confirmPassword) {
        this.clientService.registerClient(client).subscribe(
          res => {
            this.router.navigate(['login/cliente']);
            console.log(res);
        })
      }
      else {
        alert('Password and Confirm Password must be same');
      }
    }
  }
}
