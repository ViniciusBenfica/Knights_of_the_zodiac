import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  name: string = ""
  email: string = ""
  password: string = ""

  constructor(private service: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addUser(): void{

    var user: User = {
      "name": this.name,
      "email": this.email,
      "password": this.password,
    }

    this.service.addUser(user).subscribe()

    this.name = ""
    this.email = ""
    this.password = ""

    this.router.navigate(["/"])

  }

}
