import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StatusOrder } from '../../../core/enums/status-order.enum';
import { Order } from '../../../core/models/order';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrl: './page-list-orders.component.scss',
})
export class PageListOrdersComponent {
  title: string = 'Orders list';
  counter: number = 0;
  headers: string[] = [
    'Type',
    'Client',
    'NbJours',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State',
  ];
  collection$!: Observable<Order[]>;
  status = Object.values(StatusOrder);

  constructor(private ordersService: OrdersService) {
    this.collection$ = this.ordersService.collection;
  }

  ngOnInit() {
    console.log('Voici ngOnInit...');
  }

  ngOnDestroy() {
    console.log('Bye bye');
    // alert('Si vous quittez cette, vous allez perdre tous vos changements....');
  }

  changeStatus(item: Order, $event: any) {
    const status = $event.target.value;
    this.ordersService.changeStatus(item, status).subscribe((data) => {
      Object.assign(item, data);
      // item.state=data.state
    });
  }
}
