import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { RepositoriesComponent }      from './repositories/repositories.component';
import { MessagesComponent }    from './messages/messages.component';
import { DevelopersComponent } from './developers/developers.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgSelectModule
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    RepositoriesComponent,
    MessagesComponent,
    DevelopersComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
