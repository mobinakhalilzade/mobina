import { Component, OnInit } from '@angular/core';
import {
  AboutInterface,
  SkillsInterface,
} from 'src/app/interfaces/about.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutItems: AboutInterface[] = [
    {
      id: 1,
      icon: 'fa fa-tachometer-fast',
      title: 'Fast Learner',
      description:
        'Websites dont have to be static, I love making pages come to life.',
    },
    {
      id: 2,
      icon: 'fa fa-laptop-code',
      title: 'Code Lover',
      description:
        'Fast load times and lag free interaction, my highest priority.',
    },
    {
      id: 3,
      icon: 'fa fa-users',
      title: 'Team Player',
      description: 'My layouts will work on any device, big or small.',
    },
    // {id:4, icon:'',title:'',description:''},
  ];

  SkillsItems: SkillsInterface[] = [
    {name:'Html' , percent:75},
    {name:'Css' , percent:70},
    {name:'Javascript' , percent:60},
    {name:'Angular' , percent:60},
    {name:'Typescript' , percent:60},
    {name:'Git' , percent:50},
    {name:'Rest APIs' , percent:70},
    {name:'Adbobe XD' , percent:50},
    {name:'Photoshop' , percent:20},
    {name:'SQL' , percent:30},
    {name:'ASP .Net Core' , percent:20},
  ];
  constructor() {}

  ngOnInit(): void {}
}
