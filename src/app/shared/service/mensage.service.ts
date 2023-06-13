import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MensageService {

  constructor() { }
  
  error(menssagem: string, title: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: menssagem,
      showConfirmButton: true,
      timer: 3000
    })
  }

  success(menssagem: string, title: string) {
    Swal.fire({
      icon: 'success',
      title: title,
      text: menssagem,
      showConfirmButton: false,
      timer: 3000
    })
  }
}
