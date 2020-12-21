import { Component, OnInit } from '@angular/core';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-data-parser',
  templateUrl: './data-parser.component.html',
  styleUrls: ['./data-parser.component.scss']
})
export class DataParserComponent implements OnInit {

  constructor() { }

  dataList : any[];
  keys: string[];


  ngOnInit(){
  }
  onChange(files: File[]){
    
    if(files[0]){
      console.log(files[0]);
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result,file) => {
          console.log("list :"+JSON.stringify(result));
          this.dataList = result.data;
          this.keys = result.meta.fields;
        }
      });
    }
  }
}
