import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { LoginUser } from '../interfaces/User';

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
    
    var user: LoginUser = {
      name: this.name,
      password: this.password,
    }

    if(!user.password || !user.name){
      alert("Preencher os dados corretamente")
    }else{
      this.service.login(user).subscribe(item => {
        if(item){
           this.router.navigate(["/"])
           localStorage.setItem("logado", "true")
           localStorage.setItem("name", user.name)
        }else{
          alert("Login ou senha incorreto")
        }
      })
    }

    this.name = ""
    this.password = ""

  }

}
