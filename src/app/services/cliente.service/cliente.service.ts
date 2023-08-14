import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente.model';
import { URL } from 'src/app/utils/const';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {}

  crearClientes(cliente: Cliente): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(URL+'createCliente', cliente, httpOptions);
  };

  getAllClientes(): Observable<any> {
    const httpOptions = {
      Headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.get(URL+'cliente');
  }
}