import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-simulation-settings',
  templateUrl: './simulation-settings.component.html',
  styleUrls: ['./simulation-settings.component.scss']
})
export class SimulationSettingsComponent implements OnInit {

  constructor() { }
@Output() runSimButton = new EventEmitter<boolean>();
  ngOnInit(): void {
  }

  runSimulation() {
    this.runSimButton.emit(true);
    // TODO validate character/settings
    // call sim library
  }

}
