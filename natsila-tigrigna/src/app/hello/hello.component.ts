import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  
   safeURL:any;
//   videoURL: any = 'https://www.youtube.com/watch?v=Hj3cpF4xswY&feature=youtu.be'; 

   
  constructor(protected sanitizer: DomSanitizer){
    this.safeURL =  this.sanitizer.bypassSecurityTrustUrl('https://www.youtube.com/embed?v=Hj3cpF4xswY&feature=youtu.be') ;
   }

  ngOnInit() {
    
  }

}
