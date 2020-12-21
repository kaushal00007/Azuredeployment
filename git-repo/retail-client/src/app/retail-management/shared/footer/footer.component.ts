import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BasketModel } from 'src/app/models/item.models';
import { HelperService } from 'src/app/services/helper.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  basket: BasketModel = new BasketModel();

  constructor(private router: Router,
    private helperService: HelperService,
    private stateService: StateService,
  ) {
  }

  ngOnInit() {
    this.updateCart();
    this.helperService.basketEmitter.subscribe(() => {
      this.updateCart();
    })
  }

  private updateCart() {
    this.basket = this.stateService.getBasket();
  }

  public doHomeButtonClick() {
    this.router.navigate(['retail/categories']);
  }

  public doBackButtonClick() {
    this.router.navigate(['retail/categories']);
  }

  public doCartSummaryClick() {
    this.router.navigate(['retail/cartSummary']);
  }

  public doLogoutClick() {
    this.stateService.clearAll();
    this.router.navigate(['']);
  }
}
