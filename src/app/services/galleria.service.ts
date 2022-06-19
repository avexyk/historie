import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { galleriaPagina } from '../interfaces/galleria-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleriaService {

  cargando:boolean = true;
  galleria: galleriaPagina[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.cargarGalleria();
  }

  private cargarGalleria() {
    this.http.get<galleriaPagina[]>('https://historie-c87e5-default-rtdb.firebaseio.com/galleria_idx.json')
        .subscribe( ( resp ) => {
          this.galleria = resp;
          this.cargando = false;
          console.log( this.galleria );
        });
  }

}
