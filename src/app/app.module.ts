import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { ReposComponent } from './repos/repos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InformationService } from 'services/information.service';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ReposComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule

  ],
  providers: [InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
