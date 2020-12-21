import { DeliveryModel } from './delivery';

export class CatsModel {
  public cats: CatModel [];
}

export class CatModel {
  public id: number;
  public active:boolean;
  public name: string;
  public desc: string;
  public catImg:boolean;
}

export class ItemsModel {
  public items: ItemModel [];
}

export class ItemModel {
  public id: number;
  public active:boolean;
  public name: string;
  public desc: string;
  public itemImg:string;
  public itemCode:string;
  public itemPrice:string;
  public itemQuantity:number;
}
export class SiteModel {
  public id: string;
  public siteName: string;
  public enterpriseUnitName: string;
  public status:string;
  public organizationName:string;
  public customAttributeSets: any;
}

export class BasketModel {
  public totalPrice: string;
  public totalQuantity: number;
  public items :  any;
  public delivery: DeliveryModel;
  constructor(){
    this.totalPrice = '0.00';
    this.totalQuantity = 0;
    this.items = {};

  }

}
