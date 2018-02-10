import { Component, OnInit } from '@angular/core';
import { ApiService} from './api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private apiservice: ApiService) { }
  news;
 
  ngOnInit() {
     this.getNews(); }

  getNews()
{    this.apiservice.getNews().subscribe(response =>  { this.news=response }  );    }   }   


  


