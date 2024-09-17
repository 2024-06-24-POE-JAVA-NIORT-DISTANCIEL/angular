import { Component } from '@angular/core';
import { Observable } from 'rxjs';
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

  total(val: number, coef: number, tva?: number): number {
    this.counter++;
    if (tva) {
      console.log(this.counter, ': total avec TVA');
      return val * coef * (1 + tva / 100);
    }
    console.log(this.counter, ' : total sans TVA');
    return val * coef;
  }
}
