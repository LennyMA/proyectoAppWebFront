import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.models';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  url = '/api/citas/'

  constructor(private http: HttpClient) { }

  loadBooks(): Observable<any> {
    return this.http.get(this.url)
  }

  loadBook(id: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  addBook(cita: Book): Observable<any> {
    return this.http.post(this.url, cita)
  }

  updateBook(id: string, cita: Book): Observable<any> {
    return this.http.put(this.url + id, cita)
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete(this.url + id)
  }
}
