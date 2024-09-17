import { Component, Input } from '@angular/core';
import { StatusOrder } from '../../../core/enums/status-order.enum';
import { Order } from '../../../core/models/order';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss',
})
export class FormOrderComponent {
  status = Object.values(StatusOrder);
  @Input() init!: Order;
}
