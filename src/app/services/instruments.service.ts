import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  constructor(private http: HttpClient) { }

  /*Get initial list of instruments*/

  getInitialInstruments() {
    return this.http.get('https://music-store-back-end.herokuapp.com/instruments')
  }
}
