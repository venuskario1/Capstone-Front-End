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
  allinstruments: InstrumentModel[];

  constructor(private instrumentService: InstrumentsService) { }

  ngOnInit() {

    /*find all instruments and send us the data back */

    this.instrumentService.getInitialInstruments().subscribe((data) =>{
      this.allInstrument = data as InstrumentModel[];
        
    });

  }

  printInstruments() {
    console.log(this.instruments);
  }

  queryInstrument(queryParams){
    console.log(queryParams);
    this.instruments = [];
    for( var instrument of this.allInstruments) {
      var addInstrument = true;

      if(queryParams.make != "kind" ) {
        if(queryParams.make.toLowerCase() != instrument.kind.toLowerCase()) {
          addInstrument = false; 
        }
      }

      if(queryParams.model != "model" ) {
        if(queryParams.make.toLowerCase() != instrument.model.toLowerCase()) {
          addInstrument = false; 
        }
      }

      if(queryParams.color != "color" ) {
        if(queryParams.make.toLowerCase() != instrument.color.toLowerCase()) {
          addInstrument = false; 
        }
      }

      if(addInstrument){
        this.instruments.push(instrument)
      }
    }
  }

  

}
