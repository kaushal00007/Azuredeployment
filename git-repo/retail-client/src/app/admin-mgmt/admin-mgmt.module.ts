import { AdminMgmtRoutingModule } from "./admin-mgmt-routing.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminMgmtComponent } from "./admin-mgmt.component";
import { DataUploadComponent } from "./data-upload/data-upload.component";
import { EnrolluserComponent } from './enrolluser/enrolluser.component';
import { UpdateItemsDataComponent } from './update-items-data/update-items-data.component';
import { ItemupdateComponent } from './itemupdate/itemupdate.component';
import { SitesComponent } from './sites/sites.component';

@NgModule({
  declarations: [AdminMgmtComponent, DataUploadComponent, EnrolluserComponent, UpdateItemsDataComponent, ItemupdateComponent,SitesComponent],
  imports: [CommonModule, AdminMgmtRoutingModule],
})
export class AdminMgmtModule {}
