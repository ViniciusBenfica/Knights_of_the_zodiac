import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name: string = ""
  email: string = ""
  password: string = ""

  constructor() {
  }

  ngOnInit(): void {
  }

  createUser(): void{
    var user = {
      "id": 1,
      "name": this.name,
      "email": this.email,
      "password": this.password,
    }

    this.name = ""
    this.email = ""
    this.password = ""


  }

}
