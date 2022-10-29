import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
  
    });
  }

}


