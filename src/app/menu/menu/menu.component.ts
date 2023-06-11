import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  user: string = "";
  private subscription!: Subscription;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes("cadastro") || this.router.url.includes("login")) {
          this.user = "";
        }
        else if(this.router.url.includes("cliente")){
          this.user = "client";
        }
        else if (this.router.url.includes("manga")){
          this.user = "vendor";
        }
        else {
          this.user = "";
        }
      }
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login/vendedor']);

  }

}
