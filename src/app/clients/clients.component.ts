import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: string[];
  constructor(private clientsService: ClientsService) {}
  getClients() {
    this.clientsService.getClients().subscribe((clients: string[]) => {
      console.log(clients);
      this.clients = clients;
    });
  }

  ngOnInit() {
    this.getClients();
  }
}
