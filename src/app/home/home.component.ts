import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private  http:HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any)=>console.log(data))

  }

  ngOnInit(): void {
  }

}
