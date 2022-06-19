import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { equipoPagina } from '../interfaces/equipo-pagina.interface';
import { infoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: infoPagina = {};
  cargada: boolean = false;
  equipo: any = {};

  constructor(
    private http: HttpClient
  ) { 
      // console.log( 'Servicio cargado' );

      // this.http.get('assets/data/data-pagina.json')
      //     .subscribe( (resp: infoPagina) => {

      //       // console.log( resp );

      //       // type ObjectKey = keyof typeof resp;
      //       // const email = 'email' as ObjectKey;

      //       this.cargada = true;
      //       this.info = resp;

      //       console.log( resp );

      //       // console.log( resp[email] );

      //     });

      this.cargarInfo();
      this.cargarEquipo();

   }

   private cargarInfo() {
    //  Leer JSON
     this.http.get('assets/data/data-pagina.json')
         .subscribe( (resp: infoPagina) => {
           this.cargada = true,
           this.info = resp;

           console.log( this.info );
         });
   }

   private cargarEquipo() {
      this.http.get('https://historie-c87e5-default-rtdb.firebaseio.com/equipo.json')
          .subscribe( (resp: equipoPagina) => {
            this.cargada = true,
            this.equipo = resp;
            
            console.log( this.equipo );
          });
   }
}
