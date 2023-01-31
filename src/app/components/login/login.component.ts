import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem('user') === 'admin') {
      this.router.navigate(['/']);
    }
  }

  logIn(): boolean {
    if (this.email === 'admin@abc.com' && this.password === 'password') {
      localStorage.setItem('user', 'admin');
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  inputHandler(event: Event, field: string) {
    switch (field) {
      case 'email':
        this.email = (event.target as HTMLInputElement).value;
        break;
      case 'password':
        this.password = (event.target as HTMLInputElement).value;
        break;
    }
  }
}
