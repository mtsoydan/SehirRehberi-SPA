import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { from } from 'rxjs';
import { NavComponent } from './nav/nav.component';
import { CityComponent } from './city/city.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { CityDetailComponent } from './city/city-detail/city-detail.component';

@NgModule({
   declarations: [
      AppComponent,
      ValueComponent,
      NavComponent,
      CityComponent,
      CityDetailComponent
   
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      //Buraya gerekli olan route importu yapılır
      RouterModule.forRoot(appRoutes)

   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
