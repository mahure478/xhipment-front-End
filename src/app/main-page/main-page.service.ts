import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainPageService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts') 
    .pipe(catchError((e) => throwError('Something Went Wrong!!')));
  }
}
