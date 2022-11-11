import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 export interface Vaga{
  id: string;
  vagas: string;
 }

@Injectable({
  providedIn: 'root'
})
export class VagaService {
  private url ='https://localhost:7043';
  constructor( private http: HttpClient) { }

  getAll(){
    return this.http.get<[Vaga]>(this.url);
  }
}
