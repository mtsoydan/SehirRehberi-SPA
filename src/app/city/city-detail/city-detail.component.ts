import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { from } from 'rxjs';
import { CityService } from 'src/app/services/city.service';
import { City } from 'src/app/Models/City';
@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css'],
  providers:[CityService]
})
export class CityDetailComponent implements OnInit {
city :City;
  constructor(private activatedRoute:ActivatedRoute,private cityService:CityService) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(params =>{
      this.getCityByID(params["cityID"]);
    })
  }
  getCityByID(cityId:number){
    this.cityService.getCityByID(cityId).subscribe(data=>
      {
        this.city = data;
      })
  }

}
