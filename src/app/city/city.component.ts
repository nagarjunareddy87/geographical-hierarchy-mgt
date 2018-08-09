import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input() selectedCities: City;

  constructor() { }

  ngOnInit() {
  }

}
