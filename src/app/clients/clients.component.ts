import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { Client } from './Client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: [object];
  client: Client;
  constructor(private clientsService: ClientsService) {}
  getClients() {
    this.clientsService.getClients().subscribe((clients: [object]) => {
      console.log(clients);
      this.clients = clients;
    });
  }

  ngOnInit() {
    this.getClients();
  }
}
