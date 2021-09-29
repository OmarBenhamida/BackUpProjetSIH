import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuperserviceService } from '../Shared/Superservice.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css','assets/bootstrap/css/bootstrap.min.css',
  'assets/fonts/fontawesome-all.min.css','assets/fonts/font-awesome.min.css','assets/fonts/fontawesome5-overrides.min.css','assets/css/dropdown-search-bs4.css','assets/css/File-Input---Beautiful-Input--Button-Approach-Jasny-Bootstrap.css',
  'assets/css/Multi-step-form.css','assets/css/Table-With-Search-1.css','assets/css/Table-With-Search.css']
})
export class AuthComponent implements OnInit {

  isAuthenticated: any;
  constructor(private catService:SuperserviceService,private activatedRoute:ActivatedRoute,private router:Router) {}
  failed:boolean=false;


  ngOnInit(): void {
    if(localStorage.getItem("isLogin")=="true")
      if(localStorage.getItem("type")=="medecin")
        this.router.navigateByUrl("/backoffice/medecin")
        else if(localStorage.getItem("type")=="laboratoire")
        this.router.navigateByUrl("/backoffice/laboratoire")
        else if(localStorage.getItem("type")=="secretaire")
        this.router.navigateByUrl("/backoffice/secretaire")
        else if(localStorage.getItem("type")=="comptabilite")
        this.router.navigateByUrl("/backoffice/comptabilite")
        else if(localStorage.getItem("type")=="infermier")
        this.router.navigateByUrl("/backoffice/personnel")
    else
      this.router.navigateByUrl("/backoffice/personnel")
  }

  loginx(login:String,password:String,gender:String){
    this.catService.getUserLogin(login,password)
      .subscribe((data:any)=> {
        let user : any;
        if(gender=="medcin")
        user =data._embedded.medecins[0]
        else   if(gender=="infermier")
         user =data._embedded.infermiers[0]
         else   if(gender=="stock")
         user =data._embedded.stocks[0]
         else   if(gender=="rh")
         user =data._embedded.rhs[0]
         else   if(gender=="laboratoire")
         user =data._embedded.laboratoires[0]
         else   if(gender=="comptabilite")
         user =data._embedded.comptabilites[0]
        console.log(user)
        if(typeof user!='undefined'){
          localStorage.setItem("type",user.type);
          localStorage.setItem("isLogin","true")
          localStorage.setItem("id",user.idPersonnel)
          localStorage.setItem("pass",user.password)
          if (user.type == "medecin") {
            this.router.navigateByUrl("/backoffice/medecin")
          }
          if (user.type == "stock") {
            this.router.navigateByUrl("/backoffice/stock")
          }
        // @ts-ignore
        else if (user.type == "laboratoire") {
          this.router.navigateByUrl("/backoffice/laboratoire")
        }
        // @ts-ignore
        else if (user.type == "secretaire") {
          this.router.navigateByUrl("/backoffice/secretaire")
        }
        else if (user.type == "rh") {
          this.router.navigateByUrl("/backoffice/rh")
        }
        else if (user.type == "comptabilite") {
          this.router.navigateByUrl("/backoffice/comptabilite")
        }
      
        else if (user.type == "autre") {
          this.router.navigateByUrl("/backoffice/personnel")
        }
        }
          else {
      this.failed=true;
    }
      },err => {
        console.log(err);
      })
  }

}
