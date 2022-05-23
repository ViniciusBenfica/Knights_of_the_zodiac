import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Knights_of_the_zodiac';

  constructor(private router: Router) {}

  returnFirstPage(){
    this.router.navigate(["/"])
  }
}
