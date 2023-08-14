import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL } from 'src/app/utils/const';

@Injectable({
  providedIn: 'root',
})
export class EnvioTerrestreService {
  //private apiUrl = 'http://localhost:3000/enviosTerrestres'; // Cambia la URL a la de tu API
  constructor(private http: HttpClient) {}

  crearEnvioTerrestre(envioTerrestre: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(URL+'createEnvioTerrestre', envioTerrestre, httpOptions);
  }

  // Agrega métodos adicionales para obtener, actualizar y eliminar envíos terrestres
}
