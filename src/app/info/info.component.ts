import { Component, OnInit } from '@angular/core';
import { InformationService } from 'services/information.service';

 
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

    myusername!:string
    repository:any=[]
    user:any=[]
    


    constructor(private myservice:InformationService ) {
      this.myservice.getUser().subscribe(user => {
        console.log(user);
        this.user = user;
      });
      this.myservice.getRepos().subscribe(repos => {
        this.repos = repos;
      });
    }
    ngOnInit() {}
    //calling the final information regarding user
     searchUser() {
       this.myservice.updateUser(this.username);
       this.myservice.getUser().subscribe(user => {
         this.user = user;
       });
       this.myservice.getRepos().subscribe(repos => {
         this.repos = repos;
       });

}
