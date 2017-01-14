import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

import { AppComponent }       from './app.component';
import { DashBoardComponent } from './dashboard.component';
import { HeroDetailComponent }from './hero-detail.component';
import { HeroesComponent }    from './heroes.component';
import { HeroService }        from './services/hero.service';
import { AppRoutingModule }   from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory.service';




@NgModule({
  imports:[ BrowserModule, FormsModule, HttpModule, AppRoutingModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [ AppComponent, HeroDetailComponent, HeroesComponent, DashBoardComponent ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
