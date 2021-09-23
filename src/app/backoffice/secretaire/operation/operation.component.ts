import { Component, OnInit } from '@angular/core';
declare const myFan : any;
import * as $ from 'jquery';
@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css','assets/bootstrap/css/bootstrap.min.css',
  'assets/fonts/fontawesome-all.min.css','assets/fonts/font-awesome.min.css','assets/fonts/fontawesome5-overrides.min.css','assets/css/dropdown-search-bs4.css','assets/css/File-Input---Beautiful-Input--Button-Approach-Jasny-Bootstrap.css',
  'assets/css/Multi-step-form.css','assets/css/Table-With-Search-1.css','assets/css/Table-With-Search.css']
})
export class OperationComponent implements OnInit {


  callfun(){
    myFan();
  }
  constructor() { }

  ngOnInit(): void {


    var head = document.getElementsByTagName('body')[0];
    var script = document.createElement('script');
    var script2 = document.createElement('script');
    var script3 = document.createElement('script');
    var script4 = document.createElement('script');
    var script5= document.createElement('script');
    var script6= document.createElement('script');
    
    // script.type = 'text/javascript';

    script2.src='assets/bootstrap/js/bootstrap.min.j';
    script3.src='assets/js/dropdown-search-bs4.js';
    script4.src='assets/js/File-Input---Beautiful-Input--Button-Approach-Jasny-Bootstrap.js';
    script5.src='assets/js/Multi-step-form.js';
    script6.src='assets/js/Table-With-Search.js';
    

    script.src = 'assets/js/main.js';
    head.appendChild(script);
    head.appendChild(script2);
    head.appendChild(script3);
    head.appendChild(script4);
    head.appendChild(script5);
    head.appendChild(script6);


  }

}
