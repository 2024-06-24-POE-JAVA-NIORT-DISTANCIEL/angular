import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Client } from '../../core/models/client';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private collection$!: Observable<Client[]>;
  private urlApi = environment.urlApi;
  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Client[]>(`${this.urlApi}/clients`);
  }

  public get collection(): Observable<Client[]> {
    return this.collection$;
  }

  public set collection(col: Observable<Client[]>) {
    this.collection$ = col;
  }
}
