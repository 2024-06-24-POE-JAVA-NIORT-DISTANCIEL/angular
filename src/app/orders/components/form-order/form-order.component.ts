import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  form!: FormGroup;

  // form2 = new FormGroup({
  //   tjmHt: new FormControl(this.init.tjmHt),
  //   nbJours: new FormControl(this.init.nbJours),
  // });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      tjmHt: [this.init.tjmHt],
      nbJours: [this.init.nbJours],
      tva: [this.init.tva],
      state: [this.init.state],
      client: [this.init.client],
      comment: [this.init.comment],
      typePresta: [this.init.typePresta],
      id: [this.init.id],
    });
  }
}
