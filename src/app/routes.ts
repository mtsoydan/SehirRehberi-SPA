import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
import { ValueComponent } from './value/value.component';
import { CityDetailComponent } from './city/city-detail/city-detail.component';


export const appRoutes:Routes =[
    //paty olarak city gelirse --> city componentini aç
    {path : "city" , component :CityComponent},
    {path : "value" , component :ValueComponent},
    {path : "cityDetail/:cityID" , component :CityDetailComponent},

    //tam olarak adres eşleşmesi istiyoruz 
    {path : "**" , redirectTo: "city", pathMatch:"full"}
    //bunları çalıştırmak için app.module tanımlamalıyız

]
