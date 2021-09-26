import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RhComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    // script.type = 'text/javascript';

    script.src = 'assets/js/theme.js';
    head.appendChild(script);
  }

}
