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

  name!: string
  email!: string
  password!: string

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

    if(!user.email || !user.password || !user.name){
      alert("Preencher os dados corretamente")
    }else{
      this.service.addUser(user).subscribe(item => {
        if(item){
          this.router.navigate(["/"])
          localStorage.setItem("logado", "true")
          localStorage.setItem("name", user.name)
        }
      })
    }

    this.name = ""
    this.email = ""
    this.password = ""

  }

}
