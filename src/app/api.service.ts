import {Injectable} from '@angular/core';
import {Bus} from './bus';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private baseUri = 'https://api-ratp.pierre-grimaud.fr/v3';

  constructor(private http: HttpClient) {}

  public getBusLines(): Observable<Bus[]> {
    return this.http.get<Bus[]>(this.baseUri + '/lines/bus');
  }
}
