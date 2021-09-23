import { Component, OnInit } from '@angular/core';
declare const myFan : any;
import * as $ from 'jquery';
@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  callfun(){
  myFan();
}

  constructor() { }


  ngOnInit(): void {


   

  }

}
