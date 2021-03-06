import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { ClientCardComponent } from './client-card/client-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'client/:name', component: ClientCardComponent }
];
@NgModule({
  declarations: [AppComponent, ClientsComponent, SearchComponent, ClientCardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
