import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../models/medicos.models';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  url = '/api/medicos/'

  constructor(private http: HttpClient) { }

  loadDoctors(): Observable<any> {
    return this.http.get(this.url)
  }

  loadDoctor(cedula: string): Observable<any> {
    return this.http.get(this.url + cedula)
  }

  addDoctor(medico: Doctor): Observable<any> {
    return this.http.post(this.url, medico)
  }

  updateDoctor(cedula: string, medico: Doctor): Observable<any> {
    return this.http.put(this.url + cedula, medico)
  }

  deleteDoctor(cedula: string): Observable<any> {
    return this.http.delete(this.url + cedula)
  }

}
