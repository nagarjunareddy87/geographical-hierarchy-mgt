import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/models/state.model';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  @Input() selectedStates: State;
  @Output() selectedState: EventEmitter<State> = new EventEmitter<State>();
  
  constructor() { }

  ngOnInit() {
  }

  onStateChange(data: any){
    this.selectedState.emit(data);
  }
}
