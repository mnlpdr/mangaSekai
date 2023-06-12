import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientFirestore } from 'src/app/shared/models/firestore/registerClientFirestore';
import { ClientFirestoreService } from 'src/app/shared/service/firestore/client-firestore.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent {
  clientForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private clientService: ClientFirestoreService) {
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
        const clientFirestore = new ClientFirestore(undefined, {
          name: client.name,
          email: client.email,
          password: client.password,
          shoppingCart: [],
          checkout: [],
        });

        this.clientService.registerClient(clientFirestore).subscribe(
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
