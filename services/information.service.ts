import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class InformationService {
  
  myusername!:string
  constructor(private http:HttpClient) { 
  this.myusername = "kiplangat01"
   }

   finduser(){
     return this.http.get('https://api.github.com/users/'+ this.myusername).pipe(map(Response => Response))
   }

   findrepository(){
    return this.http.get('https://api.github.com/users/repos/'+ this.myusername).pipe(map(Response => Response))
   }


}
