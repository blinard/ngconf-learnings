import { Component, OnInit } from '@angular/core';
import { HeroDataService } from 'app/hero-data.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  constructor(heroDataService: HeroDataService) { }

  ngOnInit() {
  }

}
