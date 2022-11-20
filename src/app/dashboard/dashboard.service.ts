import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  

  constructor(private httpClient:HttpClient) { }

  createNewPost(data:any) {
   return this.httpClient.post('https://jsonplaceholder.typicode.com/posts',data).pipe(
    catchError(e => throwError(e))
   )
  }

  updatePost(data:any) {
    const headers = {'Content-type': 'application/json; charset=UTF-8',};
    return this.httpClient.put(`https://jsonplaceholder.typicode.com/posts/${data.id}`,data,{headers})
  }

  deletePost(id:number) {
    return this.httpClient.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
