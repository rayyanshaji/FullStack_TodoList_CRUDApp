import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {


  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
   return this.http.get <HelloWorldBean>('http://localhost:8080/hello-world'); 
  }

  executeHelloWorldBeanServiceWithParameter(name) {

 
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path/${name}`);
  }
 
}

//Access to XMLHttpRequest at 'http://localhost:8080/hello' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
