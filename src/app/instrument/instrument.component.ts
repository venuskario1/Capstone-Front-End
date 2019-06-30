import { Component, OnInit } from '@angular/core';
import { InstrumentModel } from '../models/instrumentModel';
import { InstrumentsService } from '../services/instruments.service';

@Component({
  selector: 'app-services',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {

  instruments: InstrumentModel[];
  allInstruments: InstrumentModel[];

  constructor(private instrumentService: InstrumentsService) { }

  ngOnInit() {

    /*find all instruments and send us the data back */

    this.instrumentService.getInitialInstruments().subscribe((data) =>{
      this.allInstruments = data as InstrumentModel[];
        
    });

  }

  printInstruments() {
    console.log(this.instruments);
  }

  /* ties to your drop down query take in your instruments / filter through array of objects /  and sort them based on the kind of instruments */
  queryInstruments(queryParams){
    console.log(queryParams);
    this.instruments = [];
    for( var instrument of this.allInstruments) {

      if(queryParams.toLowerCase() == instrument.kind.toLowerCase()) {
        this.instruments.push(instrument) 

      }

      console.log(instrument.kind)
    }
    console.log(this.instruments);
  }

  

}
