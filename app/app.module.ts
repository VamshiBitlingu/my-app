import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule,Routes } from '@angular/router'; 

import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './news/api.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

 const approutes: Routes= [

   { path: 'Home', component: HomeComponent },
   {  path:'Products', component: ProductsComponent } ,
   {  path:'Login', component: LoginComponent  }
 ]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(approutes) 
  ],
  providers: [ApiService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
