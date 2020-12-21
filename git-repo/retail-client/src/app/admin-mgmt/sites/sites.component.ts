import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteModel } from 'src/app/models/item.models';
import { BspServiceService } from 'src/app/services/api/bsp-service.service';
import { LoaderService } from 'src/app/shared/loader/loader.service';
import { HelperService } from 'src/app/services/helper.service';
import { MatDialog } from '@angular/material';
import { StateService } from 'src/app/services/state.service';
import {ISites} from './site-details';
var result:any=[{
  "filename": '',
  "result" : ''
}];
@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {

  sites: SiteModel;
  siteName: string ;
  status: string;
  siteId:string;
  OnlineStatus:string = '';

  Sites: ISites[] = [{  
    "Id": "92a2051073824e3eae8f6eac74c5aa03",
    "siteName": "55571",
    "status": "Check Staus",
    "computerName": "WINSJ185175-QDH",
    "dirname":"OCT2000",
    "generateFile": "Generate XML",
    "exportFile": "Export File"

  },
  {
    "Id": "989e32c3a8724cafa1329f90e95e4da1",
    "siteName": "59947",
    "status": "Check Staus",
    "computerName": "WINKS185348-JVW",
    "dirname":"OCT2000",
    "generateFile": "Generate XML",
    "exportFile": "Export File"

  },
  {
    "Id": "ac2b95d1240c4c3585be84bcb3f4ff53",
    "siteName": "59990",
    "status": "Check Staus",
    "computerName": "WINRK185302-ATG",
    "dirname":"OCT2K",
    "generateFile": "Generate XML",
    "exportFile": "Export File"
    
  }];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bspServiceService: BspServiceService,
    private loaderService: LoaderService,
    private stateService: StateService,
    private helperService: HelperService,
    private dialog: MatDialog) {
    this.siteId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    //this.getSiteStatus();
    //this.getSites();
   }
  
  getStatus(id:string){
    this.siteId = id;
    this.loaderService.show();
    this.bspServiceService.getSiteInformation(this.siteId,"PriceBookSiteDetails").toPromise().then(sitesModel => {
      this.sites = sitesModel;
      var status = JSON.parse(JSON.stringify(this.sites));
      var lenght = this.Sites.length;
      for(let i=0; i< lenght; i++){
        if(this.Sites[i].Id == id){
        this.Sites[i].status = status.status;
      }
      }

      this.loaderService.dismiss();
     }).catch(error => {
       this.loaderService.dismiss();
       this.helperService.openSomethingWrongDialog(error);
     });

  }

   generateXMLFile(siteName:string):any{

     console.log("Gererate File button called");
     this.bspServiceService.generateXMLForSite(siteName).toPromise().then(res => {
       result["filename"] = res["filename"];
       result["result"] = res["result"];
       var lenght = this.Sites.length;
       for(let i=0; i< lenght; i++){
         if(this.Sites[i].siteName == siteName){
            this.Sites[i].generateFile = result.result;
       }
      }
    }).catch(error => {
       this.loaderService.dismiss();
       this.helperService.openSomethingWrongDialog(error);
     });
   }
   exportFile(computerName: string, dirname: string):any{
    console.log("Gererate File button called");
    if(result["result"] == "SUCCESS")
    {
      this.bspServiceService.exportFileToSite(computerName,result.filename, dirname).toPromise().then(res => {
        var lenght = this.Sites.length;
        for(let i=0; i< lenght; i++){
          if(this.Sites[i].computerName == computerName){
             this.Sites[i].exportFile = res.result;
        }
       }
     }
    ).catch(error => {
      this.loaderService.dismiss();
      this.helperService.openSomethingWrongDialog(error);
    });
  }
  else{
    var lenght = this.Sites.length;
    for(let i=0; i< lenght; i++){
      if(this.Sites[i].computerName == computerName){
         this.Sites[i].exportFile = "FAILED";
    }
  }
  }
    console.log("Export File button called")
  }

}