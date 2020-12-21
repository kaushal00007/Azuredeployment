export class PaymentModel {
  public paymentType: string;
  public description: any;
  constructor(paymentType, description) {
    this.paymentType = paymentType;
    this.description = description;
  }
}
