import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada: boolean = false;

  constructor(
    private http: HttpClient
  ) { 
      // console.log( 'Servicio cargado' );

      this.http.get('assets/data/data-pagina.json')
          .subscribe( (resp: infoPagina) => {

            // console.log( resp );

            // type ObjectKey = keyof typeof resp;
            // const email = 'email' as ObjectKey;

            this.cargada = true;
            this.info = resp;

            console.log( resp );

            // console.log( resp[email] );

          });
   }
}
