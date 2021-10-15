import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './noLoginStyle.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) { }
  navIcon = './src/assets/turtle.png'

  ngOnInit(): void { this.auth.setAuthNavBar() }

  findVideoGame(e: Event, value: string) {
    e.preventDefault();
    console.log(value)
    if (value === '') this.router.navigate(['/videogames']);
    else this.router.navigate(['/find', value]);
  }
  toggleSideBar(e: Event) {
    e.preventDefault();
    (document.querySelector('.nav-menu') as HTMLUListElement).classList.toggle('show')
  }
  onLogout() {
    localStorage.removeItem('token')
    this.router.navigateByUrl('home')
    this.auth.setAuthNavBar()
  }
}
