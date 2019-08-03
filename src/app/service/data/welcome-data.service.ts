import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HelloWorldBean {
  constructor(public message: string) { }
}


/*export class ByeBean {
  constructor(public message: string) { }
}*/

@Injectable({
  providedIn: 'root'
})

export class WelcomeDataService {


  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://localhost:8080/hello-world'); 
  }

  executeHelloWorldBeanServiceWithParameter(name) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let header = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    console.log(basicAuthHeaderString)
    return this.http.get<HelloWorldBean>(
      `http://localhost:8080/hello-world/path/${name}`,
      { headers: header });
    //console.log("Execute Hello World Bean Service")
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'rayyanshaji'
    let password = 'kidman'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}

//Access to XMLHttpRequest at 'http://localhost:8080/hello' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
