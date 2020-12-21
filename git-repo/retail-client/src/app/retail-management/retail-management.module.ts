import { SelectPaymentComponent } from './select-payment/select-payment.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentManagementRoutingModule } from './retail-management-routing.module';
import {MatRippleModule, MatIconModule, MatCheckboxModule} from '@angular/material';
import { TranslateModule } from '@ngx-translate/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoresFilterPipe } from '../pipes/stores-filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { CategoriesComponent } from './categories/categories.component';
import { ItemsComponent } from './items/items.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ItemDetailsComponent } from './items/item-details/item-details.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { SelectDeliveryComponent } from './select-delivery/select-delivery.component';
import { ImageDirective } from './shared/image-loader.directive';
import { OrderSummaryComponent } from './order-summary/order-summary.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    ItemsComponent,
    ItemDetailsComponent,
    CartSummaryComponent,
    SelectDeliveryComponent,
    SidebarComponent,
    FooterComponent,
    ImageDirective,
    StoresFilterPipe,
    SelectPaymentComponent,
    OrderSummaryComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContentManagementRoutingModule,
    MatRippleModule,
    MatIconModule,
    TranslateModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    TextMaskModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class RetailManagementModule {
}
