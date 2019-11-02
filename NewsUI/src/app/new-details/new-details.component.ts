import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../Provider/api.service';

@Component({
  selector: 'app-new-details',
  templateUrl: './new-details.component.html',
  styleUrls: ['./new-details.component.css']
})
export class NewDetailsComponent implements OnInit {
  param: string;
  details: any=[];
  constructor(private route: ActivatedRoute, private apiService: ApiService,private router: Router) {
 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

  }
  ngOnInit() {
    this.route.params.subscribe(val => {
      this.param = this.route.snapshot.paramMap.get("p1");
      this.getData( this.param);

    });
  }
  getData(newsId: any) {
    this.apiService.getData("/Contents/"+newsId).then((result:any) => {
     var news=result;
      if (news.isSuccess){
        this.details=news.data;
      }
    });
  };
}
