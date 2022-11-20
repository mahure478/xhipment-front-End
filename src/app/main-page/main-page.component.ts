import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MainPageService } from './main-page.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  title = 'post-app';
  postData: any;

  constructor(private ms:MainPageService) {
  }

  ngOnInit() {
    this.getUserDetails();
  }

  getUserDetails() {
    this.ms.getAllPosts().subscribe(res => {
     this.postData = res;
    })
   }
}
