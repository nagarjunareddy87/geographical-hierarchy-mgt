import { Component } from '@angular/core';
import { Country } from 'src/app/models/country.model';
import { State } from 'src/app/models/state.model';
import { City } from 'src/app/models/city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[] = [{
    Id: 1,
    countryName: 'India'
  }, {
    Id: 2,
    countryName: 'Australia'
  }];

  selectedCountries: Country[];

  selectedStates: State[];
  states: State[] = [{
    Id: 1,
    stateName: 'AP',
    countryId: 1
  }, {
    Id: 2,
    stateName: 'Telangana',
    countryId: 1
  }, {
    Id: 3,
    stateName: 'New South Wales',
    countryId: 2
  }, {
    Id: 4,
    stateName: 'Queensland',
    countryId: 2
  }];

  selectedCities: City[];
  cities: City[] = [{
    Id: 1,
    cityName: 'Guntur',
    stateId: 1
  }, {
    Id: 2,
    cityName: 'Vijayawada',
    stateId: 1
  }, {
    Id: 3,
    cityName: 'Hyderabad',
    stateId: 2
  }, {
    Id: 4,
    cityName: 'Karimnagar',
    stateId: 2
  }, {
    Id: 5,
    cityName: 'Sydney',
    stateId: 3
  }, {
    Id: 6,
    cityName: 'Albury',
    stateId: 3
  }, {
    Id: 7,
    cityName: 'Brisbane',
    stateId: 4
  }, {
    Id: 8,
    cityName: 'Mackay',
    stateId: 4
  }];

  onCountryChange(data: any){
    const selectedCountryId = data.target.value;
    this.selectedStates = this.states.filter(r=>r.countryId == selectedCountryId);
    this.selectedCities =[];
  }

  onStateChange(data: any){
    const selectedStateId = data.target.value;
    this.selectedCities = this.cities.filter(r=>r.stateId == selectedStateId);
    // this.cities =[];
  }
}
