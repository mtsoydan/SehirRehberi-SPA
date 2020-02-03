import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Value } from "../Models/Value";

@Component({
  selector: "app-value",
  templateUrl: "./value.component.html",
  styleUrls: ["./value.component.css"]
})
export class ValueComponent implements OnInit {
  constructor(private http: HttpClient) {}

  values: Value[] = [];
  ngOnInit() {
    alert("başladı");
    //dönen data valuese eşlenir

    this.getValues().subscribe(data => (this.values = data));

    
  }
  getValues() {
    return this.http.get<Value[]>("https://localhost:44337/api/values");
  }
}
