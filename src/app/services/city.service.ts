import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from '../Models/City';
import { FUNCTION_TYPE } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class CityService {

constructor(private httpClient:HttpClient) { }
path= "https://localhost:44337/api/cities";

getCities():Observable<City[]>{
  return this.httpClient.get<City[]>(this.path+"/getcities");
} 



}
