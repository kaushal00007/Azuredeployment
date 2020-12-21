import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { StateService } from "../services/state.service";

@Component({
  selector: "app-admin-mgmt",
  templateUrl: "./admin-mgmt.component.html",
  styleUrls: ["./admin-mgmt.component.scss"],
})
export class AdminMgmtComponent implements OnInit {
  constructor(private router: Router, private stateService: StateService) {}

  ngOnInit(): void {}

  public doUploadData() {
    this.router.navigate(["admin/dataupload"]);
  }

  public doLogoutClick() {
    this.stateService.clearAll();
    this.router.navigate([""]);
  }

  public enrolluser() {
    this.router.navigate(["admin/enrolluser"]);
  }

  public UpdateItems() {
    this.router.navigate(["admin/editData"]);
  }
}
