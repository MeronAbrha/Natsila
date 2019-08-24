import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AboutYouComponent } from './about-you/about-you.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HelloKaiasComponent } from './hello-kaias/hello-kaias.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutYouComponent,
    ProductsComponent,
    HelloKaiasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ], 
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
