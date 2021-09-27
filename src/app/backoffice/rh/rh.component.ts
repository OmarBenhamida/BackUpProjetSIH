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
    var script4 = document.createElement('script');

    // script.type = 'text/javascript';

    script.src = 'assets/js/theme.js';
    script4.src='assets/js/File-Input---Beautiful-Input--Button-Approach-Jasny-Bootstrap.js';

    head.appendChild(script);
    head.appendChild(script4);

  }

}
