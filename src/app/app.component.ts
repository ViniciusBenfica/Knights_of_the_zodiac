import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Knights_of_the_zodiac';
  logado?: any = false
  name?: any = "mec"

  constructor(private router: Router) {}

  ngDoCheck(){
    this.logado = localStorage.getItem("logado");
    this.name = localStorage.getItem("name");
  }

  returnFirstPage(){
    this.router.navigate(["/"])
  }
}
