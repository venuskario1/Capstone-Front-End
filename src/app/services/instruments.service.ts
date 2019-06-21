import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  constructor(private http: HttpClient) { }

  /*Get initial list of instruments*/

  getInitialInstruments() {
    return this.http.get('http://127.0.0.1:5000/instruments')
  }
}
