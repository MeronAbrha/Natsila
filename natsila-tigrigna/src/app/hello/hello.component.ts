import { Component, OnInit } from '@angular/core';
import {DataService } from './../services/data.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
   
  constructor(
    private _dataservice : DataService
  ){}

  ngOnInit() {

    this._dataservice.getplayListDetails();
  }

  //call for content details 


}
