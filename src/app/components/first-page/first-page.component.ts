import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

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
