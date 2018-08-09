import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() countries: Country;
  @Output() selectedCountry: EventEmitter<Country> = new EventEmitter<Country>();
  
  constructor() { }

  ngOnInit() {
  }

  onCountryChange(data: any){
    this.selectedCountry.emit(data);
  }

}
