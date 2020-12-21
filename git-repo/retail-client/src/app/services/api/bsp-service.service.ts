import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HelperService } from '../helper.service';
import constants from 'src/app/shared/constants';
import { CatsModel, ItemsModel, SiteModel } from 'src/app/models/item.models';

@Injectable({
  providedIn: 'root'
})
export class BspServiceService {

  constructor(private httpClient: HttpClient, private helperService: HelperService) {
  }

public getCats(): Observable<CatsModel> {
  return this.httpClient.get<CatsModel>(constants.BACKEND_API_ENDPOINTS.BSP_GET_CATS, {
    headers: this.helperService.getAuthorizationHeader(),
  });
}

public getItems(catId: number): Observable<ItemsModel> {
  return this.httpClient.get<ItemsModel>(constants.BACKEND_API_ENDPOINTS.BSP_GET_ITEMS, {
    headers: this.helperService.getAuthorizationHeader(),
    params: new HttpParams().append('cat_id', catId.toString())
  });
}

public getCatItemDetails(catId: number): Observable<ItemsModel> {
  return this.httpClient.get<ItemsModel>(constants.BACKEND_API_ENDPOINTS.BSP_GET_CAT_ITEM_DETAILS + encodeURIComponent(catId.toString()), {
    headers: this.helperService.getAuthorizationHeader(),
    // params: new HttpParams().append('cat_id', catId.toString())
  });
      }
public getSitesDetails(siteId: string): Observable<any> {
  return this.httpClient.get<SiteModel>(constants.BACKEND_API_ENDPOINTS.BSP_GET_SITE_DETAILS + encodeURIComponent(siteId), {
    headers: this.helperService.getAuthorizationHeader(),
    params: new HttpParams().append('siteId', siteId)
  });
}
public getSiteInformation(siteId: string, customParam: string): Observable<any> {
  return this.httpClient.get<SiteModel>(constants.BACKEND_API_ENDPOINTS.BSP_GET_SITE_DETAILS + encodeURIComponent(siteId) + '/'+ encodeURIComponent(customParam) , {
    headers: this.helperService.getAuthorizationHeader(),
    //params: new HttpParams().append('siteId', siteId)
  });
}
public generateXMLForSite(siteId: string): Observable<any> {
  return this.httpClient.put(constants.BACKEND_API_ENDPOINTS.BSP_PUT_GENERATEXMLFILE + encodeURIComponent(siteId) , {
    headers: this.helperService.getAuthorizationHeader(),
    params: new HttpParams().append('siteId', siteId)
  });
}
public exportFileToSite(computerName: string, FileName: string, dirname: string): Observable<any> 
{
  var body = {'xmlFile': FileName,'computername':computerName, 'dirname':dirname};
  return this.httpClient.put(constants.BACKEND_API_ENDPOINTS.BSP_PUT_EXPORTFILETOSITE  ,body, {
    
    
    headers: this.helperService.getAuthorizationHeader()
    
    //params: new HttpParams().append('siteId', siteId)
    
  });
}
  public getItemAvailability(ItemCode: string): Observable<any> {
  return this.httpClient.get<ItemsModel>(constants.BACKEND_API_ENDPOINTS.BSP_GET_ITEM_AVAILABILITY + encodeURIComponent(ItemCode.toString()), {
        headers: this.helperService.getAuthorizationHeader(),
  });
      }

  public GetItemDetails(ItemId: number): Observable<ItemsModel> {
    return this.httpClient.get<ItemsModel>(
      constants.BACKEND_API_ENDPOINTS.BSP_GET_ITEMDETAILS +
        encodeURIComponent(ItemId.toString()),
      {
        headers: this.helperService.getAuthorizationHeader(),
        // params: new HttpParams().append('cat_id', catId.toString())
      }
    );
  }

  public updateItemPrice(itemId: number, itemPrice: number) {
    var reqBody = {
      itemPrices: [{ price: itemPrice, priceId: { itemCode: itemId } }],
    };

    console.log(reqBody);

    this.httpClient
      .put(constants.BACKEND_API_ENDPOINTS.BSP_PUT_ITEM_PRICE, reqBody, {
        headers: this.helperService.getAuthorizationHeader(),
      })
      .subscribe(
        (val) => {
          console.log('PUT call successful value returned in body', val);
        },
        (response) => {
          console.log('PUT call in error', response);
        },
        () => {
          console.log('The PUT observable is now completed.');
        }
      );

    //console.log('response from service - ' + JSON.parse(res) );
  }
}
