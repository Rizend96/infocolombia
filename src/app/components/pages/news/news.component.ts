import { Component, OnInit } from '@angular/core';
import {NoticesService} from "../../../services/notice.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
  providers: [NoticesService]
})
export class NewsComponent implements OnInit {

  constructor(public noticeService:NoticesService) { }

  ngOnInit() {
  }

  pos = this.noticeService.pos;

  funcion(i){
    localStorage.setItem('pos',JSON.stringify(i));
    this.noticeService.pos = i;
  }


}


