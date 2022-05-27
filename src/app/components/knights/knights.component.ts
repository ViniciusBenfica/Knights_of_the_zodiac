import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-knights',
  templateUrl: './knights.component.html',
  styleUrls: ['./knights.component.scss']
})
export class KnightsComponent implements OnInit {

  page: any = ""

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.page = this.activatedRoute.snapshot.paramMap.get('knights')
  }

}
