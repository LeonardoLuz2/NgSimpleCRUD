import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteRepositoryService {

  API = 'http://localhost:3000/clientes/'

  constructor(private http: HttpClient) { }

  public getAll() : any {
    return this.http.get(this.API);
  }

  public register(cliente: Cliente): Observable<Cliente>  {
    return this.http.post<Cliente>(this.API, cliente)
  }

  public remove(id) : Observable<Cliente> {
    return this.http.delete<Cliente>(this.API + id)
  }

  public update(id, cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.API + id, cliente)
  }

  public getById(id) : any {
    return this.http.get(this.API + id);
  }
}
