import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dossiermedical',
  templateUrl: './dossiermedical.component.html',
  styleUrls: ['./assets/css/style.css','./assets/vendor/animate.css/animate.min.css', './assets/vendor/bootstrap-icons/bootstrap-icons.css',
  './assets/vendor/boxicons/css/boxicons.min.css','./assets/vendor/fontawesome-free/css/all.min.css','./assets/vendor/glightbox/css/glightbox.min.css','./assets/vendor/remixicon/remixicon.css',
  './assets/vendor/swiper/swiper-bundle.min.css'],
})
export class DossiermedicalComponent implements OnInit {

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

    script2.src='assets/vendor/bootstrap/js/bootstrap.bundle.min.js';
    script3.src='assets/vendor/glightbox/js/glightbox.min.js';
    script4.src='assets/vendor/php-email-form/validate.js';
    script5.src='assets/vendor/swiper/swiper-bundle.min.js';
    script6.src='assets/vendor/purecounter/purecounter.js';
    

    script.src = 'assets/js/main.js';
    head.appendChild(script);
    head.appendChild(script2);
    head.appendChild(script3);
    head.appendChild(script4);
    head.appendChild(script5);
    head.appendChild(script6);


  }

}

