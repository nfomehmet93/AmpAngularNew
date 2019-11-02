import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewDetailsComponent } from './new-details/new-details.component';
import { NewListComponent } from './new-list/new-list.component';
import { ApiService } from './Provider/api.service';


@NgModule({
  declarations: [
    AppComponent,
    NewDetailsComponent,
    NewListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
