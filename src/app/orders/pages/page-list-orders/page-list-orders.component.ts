import { Component } from '@angular/core';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss',
})
export class PageListOrdersComponent {
  title: string = 'Orders list';
  headers: string[] = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  collection!: Order[];

  constructor(private ordersService: OrdersService) {
    this.ordersService.collection.subscribe((orders) => {
      this.collection = orders;
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
