import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './client-card/Client';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  root = 'assets/clients.json';
  client: Client;
  constructor(private http: HttpClient) {}
  getClients(): Observable<Array<Client>> {
    return this.http.get<Array<Client>>(this.root);
  }
}
