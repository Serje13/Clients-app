import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ClientCardComponent } from '../client-card/client-card.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: [object];
  name: string;
  @ViewChild(ClientCardComponent)
  private clientCardComponent: ClientCardComponent;
  getUserInfo(name) {
    this.clientCardComponent.getInfo(name);
  }
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
