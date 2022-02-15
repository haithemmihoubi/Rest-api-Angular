import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {

  constructor(private http: HttpClient) {
  }

  /*
  * get All POSTS from jsonPlaceHolder
  * */
  getAllPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
 getOnePost(id:any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }

}
