import {Component, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {Bus} from './bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiService]
})
export class AppComponent implements OnInit {
  title = 'ratp app';
  bus: Bus[];

  constructor(private api: ApiService) {}

  getBusLines() {
    this.api.getBusLines().subscribe(bus => {
      this.bus = bus['result']['bus'].map(value => {
        return new Bus(
          value.number,
          value.name,
          value.directions,
          value.id);
        });
    });
  }

  ngOnInit() {
    this.getBusLines();
  }
}
