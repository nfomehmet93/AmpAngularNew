import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ApiService } from '../Provider/api.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {
  newsList: any = [];
  constructor(private route: ActivatedRoute, private apiService: ApiService,private router: Router) {
 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }
  ngOnInit() {
    this.route.params.subscribe(val => {
       this.getData();
    });
  }

  getData() {
    this.apiService.getData("/Contents").then((result:any) => {
     var news=result;
      if (news.isSuccess){
        this.newsList=news.data;
      }
    });
  };

}
