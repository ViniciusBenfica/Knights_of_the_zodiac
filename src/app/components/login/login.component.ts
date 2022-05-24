import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = ""
  password: string = ""

  constructor(private service: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login(): void{
    var user: User = {
      "name": this.name,
      "password": this.password,
    }

    if(!user.email || !user.name){
      alert("teste")
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
    this.password = ""

  }

}
