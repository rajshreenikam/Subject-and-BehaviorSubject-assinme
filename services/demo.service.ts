import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { devAPIUrl } from 'src/environments/environment';

@Injectable({  
  providedIn: 'root' // 'root' it means whole application has access of this service.... if you dont write here @injectable then must register service in provider inside app.module.ts
})
export class DemoService {

  // url:string='https://jsonplaceholder.typicode.com/users';
//  postUrl:string='https://jsonplaceholder.typicode.com/posts';

userName = new Subject<any>(); 
// userName = new BehaviorSubject('CodemindTechnology');

empName= new Subject<any>();
empEmail= new Subject<any>();
empCompany= new Subject<any>();
empContact= new Subject<any>();


  product=[
    {name:"laptop",id:101},
    {name:"Mobile",id:102},
    {name:"TV",id:103}
  ]

  constructor(private httpClient:HttpClient) { 

  }


  //  hello(){
  //   alert(' I am form DemoService')
  //  }
      

  getUsers(): Observable<any>{
  //  return this.httpClient.get(this.url)
  return this.httpClient.get(`${devAPIUrl}users`);
  
  }

  getPosts():Observable<any>{
    // return this.httpClient.get(this.postUrl);
    return this.httpClient.get(`${devAPIUrl}posts`);
  }

  createPost(post): Observable<any> {
    let endPoints = "posts";
    return this.httpClient.post<any>(`${devAPIUrl+ endPoints}`, JSON.stringify(post));
  }
}
