import { Component, OnInit } from '@angular/core';
import { NavbarInterface } from 'src/app/interfaces/navbar.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarItems: NavbarInterface[] = [
    { name: 'Home', link: '', id: 1, active: true },
    { name: 'About', link: '', id: 1, active: false },
    { name: 'Portfolio', link: '', id: 1, active: false },
    { name: 'Blog', link: '', id: 1, active: false },
    { name: 'Contact', link: '', id: 1, active: false },
  ];

  constructor() {}

  ngOnInit(): void {}
}
