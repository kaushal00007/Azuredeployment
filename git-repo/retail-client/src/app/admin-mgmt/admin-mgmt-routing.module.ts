import { ItemupdateComponent } from "./itemupdate/itemupdate.component";
import { EnrolluserComponent } from "./enrolluser/enrolluser.component";
import { DataUploadComponent } from "./data-upload/data-upload.component";
import { AdminMgmtModule } from "./admin-mgmt.module";
import { AdminMgmtComponent } from "./admin-mgmt.component";
import { UpdateItemsDataComponent } from "./update-items-data/update-items-data.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SitesComponent } from './sites/sites.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "options",
    pathMatch: "full",
  },
  { path: "options", component: AdminMgmtComponent },
  { path: "dataupload", component: DataUploadComponent },
  { path: "enrolluser", component: EnrolluserComponent },
  { path: "editData", component: UpdateItemsDataComponent },
  { path: "itemUpdate/:id", component: ItemupdateComponent },
  { path: 'sites', component: SitesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminMgmtRoutingModule {}
