import { Component, OnInit } from '@angular/core';
import { SearchServiceService } from '../search-service.service';
import { switchMap, debounceTime, filter, distinctUntilChanged, startWith, map } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Client } from '../client-card/Client';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  clients: Array<Client>;
  value: string;
  client: Client;
  results: Array<Client>;
  filteredOptions: Observable<string[]>;
  options: string[] = [];
  findControl = new FormControl();
  constructor(private searchServiceService: SearchServiceService) {}

  ngOnInit() {
    this.findControl.valueChanges
      .pipe(
        filter(value => value.length > 1),
        debounceTime(10),
        distinctUntilChanged(),
        switchMap(() => this.searchServiceService.getClients().pipe())
      )
      .subscribe(clients => {
        this.clients = clients;
        const res: Array<Client> = [];
        const val = this.findControl.value;
        const re: RegExp = new RegExp(`^${val}`, 'gi');
        this.clients.filter(item => {
          const general: object = item.general;
          const job: object = item.job;
          const contact: object = item.contact;
          const address: object = item.address;
          for (const key in general) {
            if (general.hasOwnProperty(key)) {
              if (key !== 'avatar') {
                const prop: string = general[key].match(re);
                if (prop !== null) {
                  res.push(item);
                }
              }
            }
          }
          for (const key in job) {
            if (job.hasOwnProperty(key)) {
              const prop: string = job[key].match(re);
              if (prop !== null) {
                res.push(item);
              }
            }
          }
          for (const key in contact) {
            if (contact.hasOwnProperty(key)) {
              const prop: string = contact[key].match(re);
              if (prop !== null) {
                res.push(item);
              }
            }
          }
          for (const key in address) {
            if (address.hasOwnProperty(key)) {
              const prop: string = address[key].match(re);
              if (prop !== null) {
                res.push(item);
              }
            }
          }
        });
        console.log(res);
        this.results = res;
        const opti: Array<string> = [];
        this.results.filter(opt => {
          const name: string = opt.general.firstName;
          opti.push(name);
        });
        const a: Array<string> = opti.filter((item, pos, arr) => !pos || item !== arr[pos - 1]);
        this.options = a;
        console.log(this.options);
      });
    this.filteredOptions = this.findControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value;
    return this.options.filter(options => options.includes(filterValue));
  }
}
