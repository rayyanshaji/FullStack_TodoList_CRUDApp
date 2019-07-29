import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  name = '';
 
  welcomemsg: string
  byemsg:string

  constructor(private router: ActivatedRoute, private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.router.snapshot.params['name']   
  }

  getWelcomeMessageWithParameter() {
   console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanServiceWithParameter(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleResponseError(error));    
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.welcomemsg = response.message;
  }

  getByeMessage() {
   console.log(this.service.executeByeWorldBeanService());
    this.service.executeByeWorldBeanService().subscribe(resp => this.handleSuccessfulResp(resp), error => this.handleResponseError(error));
  }

 

  handleSuccessfulResp(resp) {
    console.log(resp);
    this.byemsg = resp.message;
  }

  handleResponseError(error) {
    console.log(error);
    console.log(error.error);
    console.log(error.error.message);
    this.welcomemsg = error.error.message;
    this.byemsg = error.error.message;
  }

}
