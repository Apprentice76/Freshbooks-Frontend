import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() loggedIn: boolean = true;
  constructor(private router: Router) { }
  
  logOut() {
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
