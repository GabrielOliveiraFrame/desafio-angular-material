import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }

  getById(id: any){
    return this.http.get(`${environment.API_COMMENTS_URL}?postId=${id}`);
  }
}
