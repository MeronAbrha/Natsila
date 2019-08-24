import { Component, OnInit } from '@angular/core';
import {DataService } from './../services/data.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
   
  items: any;
  vidId = [];
  vidTitle = [];
  outputs = [];
  urls = [];
  toIframe = [];
  constructor(
    private _dataservice : DataService
  ){}

  ngOnInit() {

    this._dataservice.getplayListDetails().then(res => {
      //console.log("test rest -->"+ res);
      this.items = res["items"];
      for(let i in this.items){
        
          this.vidTitle.push( this.items[i].snippet.title);
          this.vidId.push(this.items[i].snippet.resourceId.videoId);
          this.outputs.push( 'www.youtube.com/embed/' + this.items[i].snippet.resourceId.videoId);
      
          this.toIframe.push( '"www.youtube.com/embed/' + this.items[i].snippet.resourceId.videoId + '"');

          //this.urls.push( this.items[i].snippet.resourceId.videoId);
          //this.urls.push( '<li><iframe src="www.youtube.com/embed/" + this.items[i].snippet.resourceId.videoId ></frame></li>"');
          console.log(this.outputs.pop());
      }
    });
  }

}
