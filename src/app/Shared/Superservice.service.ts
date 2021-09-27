import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperserviceService {

  public host:String="http://localhost:8080";


  constructor(private httpClient:HttpClient) { }



  getUserLogin(login:String,password:String) {
    return this.httpClient.get(this.host+"/personnels/search/Login?login="+login+"&password="+password)
  }

  public getData(link:String){
    return this.httpClient.get(this.host+"/"+link);
  }
  public deleteData(url:String){
    // @ts-ignore
    return this.httpClient.delete(this.host+"/"+link);
  }


  public saveData(url:String,data:any){
    // @ts-ignore
    return this.httpClient.post(url,data);
  }
}