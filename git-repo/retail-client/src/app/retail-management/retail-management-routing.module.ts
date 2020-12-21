import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

import { SelectDeliveryComponent } from './select-delivery/select-delivery.component';
import { SelectPaymentComponent } from './select-payment/select-payment.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full'
  },
  { path: 'categories', component: CategoriesComponent },
  { path: 'items/:id', component: ItemsComponent },
  { path: 'cartSummary', component: CartSummaryComponent },
  { path: 'deliveries', component: SelectDeliveryComponent},
  { path: 'payment', component: SelectPaymentComponent},
  { path: 'orderSummary', component: OrderSummaryComponent}

];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ContentManagementRoutingModule {
}
