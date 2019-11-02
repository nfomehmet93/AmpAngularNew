import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
let apiURL = "https://localhost:44345";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postData(  func: String,body: any) {
    return new Promise((resolve, reject) => {
       let url = apiURL + func ;
       this.http.post(url,body).subscribe((res: any) => {
        resolve(res);
      }, (err) => {
        resolve(err.error);       
      });
    });
  }
  getData(parameters: string) {
      return new Promise((resolve, reject) => {
        let headers = new HttpHeaders({
          'Content-Type':'application/json;charset=utf-8',
          'Access-Control-Allow-Orgin':'*',
          'Access-Control-Allow-Methods':'*'
        });  
  
        let url = apiURL + parameters;
        this.http.get(url,{headers}).subscribe((res: any) => {
          setTimeout(() => {
        }, 1000);
            resolve(res);
        }, (err) => {
            resolve(err);
        });
      });
    }
   
}
