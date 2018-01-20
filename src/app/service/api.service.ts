import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Bus} from '../entity/bus';
// import {Metro} from '../entity/metro';
// import {Tram} from '../entity/tram';
// import {Rer} from '../entity/rer';
import {Schedule} from '../entity/schedule';

@Injectable()
export class ApiService {

  public baseUri = 'https://api-ratp.pierre-grimaud.fr/v3';

  constructor(public http: HttpClient) {
  }

  public getBusLines(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.baseUri + '/lines/bus');
  }

  // public getMetrosLines(): Observable<Metro[]> {
  //   return this.http.get<Metro[]>(this.baseUri + '/lines/metros');
  // }
  //
  // public getTramsLines(): Observable<Tram[]> {
  //   return this.http.get<Tram[]>(this.baseUri + '/lines/trams');
  // }
  //
  // public getRersLines(): Observable<Rer[]> {
  //   return this.http.get<Rer[]>(this.baseUri + '/lines/rers');
  // }

  public getSchedules(type: string, id: number, station: string, direction: 'A' | 'R'): Observable<Schedule[]> {
    const uri = 'https://api-ratp.pierre-grimaud.fr/v3/schedules/' + type + '/' + id + '/' + station + '/' + direction;
    return this.http.get<Schedule[]>(uri);
  }
}
