import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(
    private loginService: LoginService
  ) {}
  ngOnInit() {
    this.loginService.isUserLoggedIn.subscribe((resp: boolean) => {
      this.isUserLoggedIn = resp;
    })
  }
  onClick() {
    this.loginService.onCheckLogin();
    this.loginService.isUserLoggedIn.subscribe((resp: boolean) => {
      this.isUserLoggedIn = resp;
    })
  }
}
