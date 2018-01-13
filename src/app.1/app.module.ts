import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  // [{ngModel}] lives here
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { HeroDetailsComponent} from './hero-details/hero-details.component';
import { HeroesComponent } from  './heroes/heroes.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { HeroService} from './service/hero.service'
import { AppRoutingModule } from './app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailsComponent,
    HeroesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})

export class AppModule { }
