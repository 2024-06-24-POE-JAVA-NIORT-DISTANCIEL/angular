import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StatusOrder } from '../../core/enums/status-order.enum';
import { Order } from '../../core/models/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$!: Observable<Order[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.urlApi}/orders`).pipe(
      map((data) => {
        return data.map((obj) => new Order(obj));
      })
    );
  }

  public get collection(): Observable<Order[]> {
    return this.collection$;
  }

  public set collection(col: Observable<Order[]>) {
    this.collection$ = col;
  }

  public changeStatus(item: Order, status: StatusOrder): Observable<Order> {
    const obj = new Order({ ...item });
    obj.state = status;
    return this.update(obj);
  }

  public update(item: Order): Observable<Order> {
    return this.http.put<Order>(`${this.urlApi}/orders/${item.id}`, item);
  }
}
