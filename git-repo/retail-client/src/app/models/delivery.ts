export class DeliveryModel {
    public deliveryType: string;
    public deliveryPrice: string;
    public description :  any;
    constructor(deliveryType, deliveryPrice, description){
      this.deliveryType = deliveryType;
      this.deliveryPrice = deliveryPrice;
      this.description = description;
  
    }
  
  }
  