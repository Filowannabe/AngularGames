import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }
  navIcon = './src/assets/turtle.png'
  ngOnInit(): void {
  }
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
}
