import { Component, OnInit } from '@angular/core';
import { InformationService } from 'services/information.service';

 
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  providers: [InformationService]
})
export class InfoComponent implements OnInit {

    myusername!:string
    repository:any=[]
    user:any=[]
    


    constructor(private myservice:InformationService ) {
      this.myservice.finduser().subscribe(user => {
        console.log(user);
        this.user = user;
      });
      this.myservice.findrepository().subscribe(repository => {
        this.repository = repository;
      });
    }
    ngOnInit() {}
    //calling the final information regarding user
     searchUser() {
       this.myservice.search(this.myusername);
       this.myservice.finduser().subscribe(user => {
         this.user = user;
       });
       this.myservice.findrepository().subscribe(repository => {
         this.repository = repository;
       });

}
}