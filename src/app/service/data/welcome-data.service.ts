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

  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('http://ec2-18-222-29-176.us-east-2.compute.amazonaws.com:8085/hello-world-bean');
    //console.log("Execute Hello World Bean Service")
  }
  //http://localhost:8085/hello-world/path-variable/in28minutes

  executeHelloWorldServiceWithPathVariable(name) {
    let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<HelloWorldBean>(
      `http://ec2-18-222-29-176.us-east-2.compute.amazonaws.com:8085/hello-world/path-variable/${name}`,
      { headers });
    //console.log("Execute Hello World Bean Service")
  }

  createBasicAuthenticationHttpHeader() {
    let username = 'rayyanshaji'
    let password = 'root'
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    return basicAuthHeaderString;
  }
}

//Access to XMLHttpRequest at 'http://localhost:8080/hello' from origin 'http://localhost:4200' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
