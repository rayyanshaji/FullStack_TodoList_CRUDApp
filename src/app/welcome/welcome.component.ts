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
  

  constructor(private route: ActivatedRoute,
    private service: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name']   
  }


  getWelcomeMessage() {
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleResponseError(error)
    );
  }

  getWelcomeMessageWithParameter() {
   //console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
      response => this.handleSuccessfulResponse(response),
      error => this.handleResponseError(error));    
  }

  handleSuccessfulResponse(response) {
    console.log(response);
    this.welcomemsg = response.message;
    console.log(this.welcomemsg)
  }


  handleResponseError(error) {
   // console.log(error);
   // console.log(error.error);
   // console.log(error.error.message);
    this.welcomemsg = error.error.message;
  }

}
