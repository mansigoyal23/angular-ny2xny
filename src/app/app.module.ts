import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import NgMasonryGridModule
import { NgMasonryGridModule } from 'ng-masonry-grid';
import { MasonarygridComponent } from './masonarygrid/masonarygrid.component';

import { NgxMasonryModule } from 'ngx-masonry';
import { NewmasonaryComponent } from './newmasonary/newmasonary.component';

@NgModule({
  declarations: [
    AppComponent,
    MasonarygridComponent,
    NewmasonaryComponent
  ],
  imports: [
    BrowserModule,
    NgxMasonryModule,
    NgMasonryGridModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
