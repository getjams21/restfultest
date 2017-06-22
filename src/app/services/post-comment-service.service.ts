import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Headers, RequestOptions, Response, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostCommentService {
  
  constructor(
    private http: Http
  ) { }

  getAllPosts(){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts`).map((response: Response) => response.json());
  }

  getAllComments(){
    return this.http.get(`https://jsonplaceholder.typicode.com/comments`).map((response: Response) => response.json());
  }
}
