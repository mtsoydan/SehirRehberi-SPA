import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../Models/City';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';
import { Photo } from '../Models/Photo';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(private httpClient:HttpClient) { }
path= "https://localhost:44337/api/cities/";

getCities():Observable<City[]>{
  return this.httpClient.get<City[]>(this.path+"getcities");
} 


getCityByID(cityID:number):Observable<City>{
 return this.httpClient.get<City>(this.path+"detail/"+cityID);
}

getPhotosByCity(cityID:number):Observable<Photo[]>
{
  return this.httpClient.get<Photo[]>(this.path+"photos/"+cityID)
}
}
