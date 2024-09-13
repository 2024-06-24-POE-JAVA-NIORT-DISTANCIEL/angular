import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss',
})
export class PageListOrdersComponent {
  title: string = 'Orders list';
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((orders) => {
      // console.log('Orders : ', orders);
    });
  }

  ngOnInit() {
    console.log('Voici ngOnInit...');
  }

  ngOnDestroy() {
    console.log('Bye bye');
    // alert('Si vous quittez cette, vous allez perdre tous vos changements....');
  }
}
