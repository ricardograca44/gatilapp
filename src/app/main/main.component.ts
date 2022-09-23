import { Component, OnInit } from '@angular/core';
import { Image } from 'primeng/image';
import { Cat } from '../image';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  images: Image[] = [];
  index: number = 0;
  currentCat: Cat = {} 

  responsiveOptions:any[] = [
      {
          breakpoint: '1024px',
          numVisible: 1
      },
      {
          breakpoint: '768px',
          numVisible: 1
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];

  constructor(private photoService: PhotoService) { }

  ngOnInit(): void {
    this.photoService.getImages().then(images => { 
      this.images = images
      this.index = 0
      this.currentCat = this.images[this.index]
    })
  }

  setPage(e: any) {
    this.index = e.page
    this.currentCat = this.images[this.index]
  }

}
