import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  signos: string[] = [
    "aquarius",
    "aries",
    "cancer",
    "capricorn",
    "gemini",
    "leo",
    "libra",
    "pisces",
    "sagittarius",
    "scorpio",
    "taurus",
    "virgo",
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goingToPage(signo: string){
    this.router.navigate(["horoscope/"+signo])
  }

}
