import { Component, OnInit } from '@angular/core';
import { ClientCardService } from '../client-card.service';
import { Client } from './Client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-card',
  templateUrl: './client-card.component.html',
  styleUrls: ['./client-card.component.css']
})
export class ClientCardComponent implements OnInit {
  clients: Array<Client>;
  client: Client;

  constructor(private clientCardService: ClientCardService, private route: ActivatedRoute) {}
  getInfo(name: string) {
    console.log(name);
    if (name) {
      this.clientCardService.getClients().subscribe((clients: Array<Client>) => {
        this.clients = clients;
        this.clients.filter((clients, elem) => {
          const { firstName } = clients['general'];
          if (firstName === name) {
            const index = elem;
            this.client = this.clients[index];
          }
        });
      });
    }
  }

  ngOnInit() {}
}
