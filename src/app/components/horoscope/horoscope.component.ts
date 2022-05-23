import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { Horoscope } from '../interfaces/Horoscope';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.scss']
})
export class HoroscopeComponent implements OnInit {

  current_data: string = ""
  description: string = ""
  compatibility: string = ""
  mood: string = ""
  color: string = ""
  lucky_number: string = ""
  page: any = ""

  constructor(private activatedRoute: ActivatedRoute, private service: ServiceService) { }

  ngOnInit(): void {
    this.page = this.activatedRoute.snapshot.paramMap.get('signo')
    this.dataHoroscope()
  }

  dataHoroscope(){
    this.service.dataHoroscope(this.page).subscribe((item: Horoscope) => {
      this.current_data = item.current_data
      this.description = item.description
      this.compatibility = item.compatibility
      this.mood = item.mood
      this.color = item.color
      this.lucky_number = item.lucky_number
    })
  }

}
