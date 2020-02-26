import { Component, OnInit } from "@angular/core";
import { City } from "../Models/City";
import { CityService } from "../services/city.service";
import { getLocaleDayNames } from '@angular/common';


@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"],
  providers: [CityService]
})
export class CityComponent implements OnInit {
  //city servicenin instance ını olusturuyoruz
  constructor(private cityService: CityService) {}

  
  cities: City[];
  ngOnInit() {
    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    })
    
  }




}
