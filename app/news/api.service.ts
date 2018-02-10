
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

    constructor( private http:HttpClient )
     { 
     }
     getNews()
     {
         return this.http.get('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=a5b2429df3304815bf59859f5bcf35d7');
     }

}