import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Mantenedora } from './mantenedora';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MantenedoraService {

  url = `${environment.urlApi}/mantenedora`;

  constructor(private http: HttpClient) { }

  findAll(): Observable<Mantenedora[]>{
    return this.http.get<Mantenedora[]>(`${this.url}`);
  }

  findById(id:number): Observable<Mantenedora>{
    return this.http.get<Mantenedora>(`${this.url}/${id}`);
  }

  save(mantenedora: Mantenedora): Observable<Mantenedora>{
    if(mantenedora.id){
      return this.http.put<Mantenedora>(`${this.url}`, JSON.stringify(mantenedora), httpOptions);
    } else {
      return this.http.post<Mantenedora>(`${this.url}`, JSON.stringify(mantenedora), httpOptions);
    }
  }
  
  deleteById(id:number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
