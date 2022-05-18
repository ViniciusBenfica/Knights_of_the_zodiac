import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = ""
  password: string = ""

  constructor() {
  }

  ngOnInit(): void {
  }

  login(): void{
    var user = {
      "name": this.name,
      "password": this.password,
    }
    
    

    this.name = ""
    this.password = ""

  }

}
