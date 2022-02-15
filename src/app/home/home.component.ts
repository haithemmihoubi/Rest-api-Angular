import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ShareServiceService} from "../services/share-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  dataArray: any
  dataObservable: Subscription
  id = 2
dataOneObservable:Subscription
  constructor(private share: ShareServiceService, private http: HttpClient) {
    //Subscribe to the API to fetch data from the current url in getAllPosts
    this.dataObservable = this.share.getAllPosts().subscribe((data: any) => this.dataArray = data)

    this.dataOneObservable= this.share.getOnePost(2).subscribe(data => console.log(data));


  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.dataObservable.unsubscribe()
    this.dataOneObservable.unsubscribe()
  }

}
