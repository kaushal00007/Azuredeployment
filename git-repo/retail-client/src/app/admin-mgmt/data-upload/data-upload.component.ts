import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as Papa from "papaparse";

@Component({
  selector: "app-data-upload",
  templateUrl: "./data-upload.component.html",
  styleUrls: ["./data-upload.component.scss"],
})
export class DataUploadComponent implements OnInit {
  constructor(private router: Router) {}

  dataList: any[];
  keys: string[];

  ngOnInit(): void {}

  onChange(files: File[]) {
    if (files[0]) {
      console.log(files[0]);
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (result, file) => {
          console.log("list :" + JSON.stringify(result));
          this.dataList = result.data;
          this.keys = result.meta.fields;
        },
      });
    }
  }

  public UploadData() {}
  public goBacktoAdmin() {
    this.router.navigate(["admin"]);
  }
}
