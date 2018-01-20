import {Component, OnInit} from '@angular/core';
import {ApiService} from './service/api.service';
import {Bus} from './entity/bus';
import {Schedule} from './entity/schedule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  constructor(private api: ApiService) {}

  busList: Bus[];
  schedules: Schedule[];

  getBusLines() {
    this.api.getBusLines().subscribe(bus => {
      this.busList = bus['result']['bus'].map(value => {
        return new Bus(
          value.number,
          value.name,
          value.directions,
          value.id);
        });
    });
  }

  getBus80() {
    this.api.getSchedules(
      'bus',
      80,
      'place+de+clichy',
      'A'
    ).subscribe(result => {
      this.schedules = result['result']['schedules'].map(value => {
        return new Schedule(value.message, value.destination);
      });
    });
  }

  ngOnInit() {
    this.getBus80();
  }
}
