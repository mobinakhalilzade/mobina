import { Component, OnInit } from '@angular/core';
import { SocialMediaInterface } from 'src/app/interfaces/social-media.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  SocialMediaItems: SocialMediaInterface[] = [
    { id: 1, name: 'Linkedin', link: 'https://www.linkedin.com/in/mobina-khalilzade/', icon: 'fab fa-linkedin-in' },
    { id: 2, name: 'Github', link: 'https://github.com/mobinakhalilzade', icon: 'fab fa-github' },
    { id: 3, name: 'Whatsapp', link: 'wa.me/+989016355725', icon: 'fab fa-whatsapp' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
