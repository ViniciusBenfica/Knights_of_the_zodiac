import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { GetSign } from '../interfaces/User';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  name: any = ""

  signos: string[] = [
    "aries",
    "taurus",
    "gemini",
    "cancer",
    "leo",
    "virgo",
    "libra",
    "scorpio",
    "sagittarius",
    "capricorn",
    "aquarius",
    "pisces",
  ]

  constructor(private router: Router, private service: ServiceService) {
  }

  ngOnInit(): void {
  }

  goingToPage(signo: string): void{
    this.router.navigate(["horoscope/"+signo])
  }

  getKnights(): void{
    this.name = localStorage.getItem("name");

    var user: GetSign = {
      name: this.name,
    }

    if(!this.name){
      alert("Precisa estar logado")
    }else{
      this.service.getKnights(user).subscribe(item  => {
        console.log(item.signo)
        
      })
    }
  }

}
