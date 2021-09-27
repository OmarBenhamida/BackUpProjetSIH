import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperserviceService } from 'src/app/Shared/Superservice.service';

@Component({
  selector: 'app-personnel',
  templateUrl: './personnel.component.html',
  styleUrls: ['./personnel.component.css']
})
export class PersonnelComponent implements OnInit {

  constructor(private catService:SuperserviceService,private activatedRoute:ActivatedRoute,private router:Router) {

  }
  type = localStorage.getItem('type');
  login = localStorage.getItem('isLogin');

  logout() {
    localStorage.clear()
    this.type=null;
    this.login=null;
    this.router.navigateByUrl("")
  }
  ngOnInit(): void {

    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    // script.type = 'text/javascript';

    script.src = 'assets/js/theme.js';
    head.appendChild(script);






  }



}
