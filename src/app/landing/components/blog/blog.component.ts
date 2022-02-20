import { Component, OnInit } from '@angular/core';
import { BlogInterface } from 'src/app/interfaces/blog.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogItems: BlogInterface[] = [
    {
      id: 1,
      title: 'Shared Module',
      description:
        'Websites dont have to be static, I love making pages come to life.',
      img: '../../../../assets/images/shared-module.png',
      date: 'May 28, 2021',
    }, {
      id: 1,
      title: 'Shared Module',
      description:
        'Websites dont have to be static, I love making pages come to life.',
      img: '../../../../assets/images/shared-module.png',
      date: 'May 28, 2021',
    }, {
      id: 1,
      title: 'Shared Module',
      description:
        'Websites dont have to be static, I love making pages come to life.',
      img: '../../../../assets/images/shared-module.png',
      date: 'May 28, 2021',
    }, {
      id: 1,
      title: 'Shared Module',
      description:
        'Websites dont have to be static, I love making pages come to life.',
      img: '../../../../assets/images/shared-module.png',
      date: 'May 28, 2021',
    },
   
  ];

  constructor() {}

  ngOnInit(): void {}
}
