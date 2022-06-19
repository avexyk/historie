import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { galleriaPagina } from '../interfaces/galleria-pagina.interface';
import { itemGalleriaPagina } from '../interfaces/item-galleria.interface';

@Injectable({
  providedIn: 'root'
})
export class GalleriaService {

  cargando:boolean = true;
  galleria: galleriaPagina[] = [];
  galleriaFiltrada: galleriaPagina[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.cargarGalleria();
  }

  private cargarGalleria() {
    // promesas
    return new Promise<void>(( resolve, reject ) => {
      this.http.get<galleriaPagina[]>('https://historie-c87e5-default-rtdb.firebaseio.com/galleria_idx.json')
        .subscribe( ( resp ) => {
          this.galleria = resp;
          
          setTimeout(() => {
            this.cargando = false;
          }, 1000);

          resolve();
        });
    });
  }

  public getGalleria(id: string) {
    return this.http.get<itemGalleriaPagina>(`https://historie-c87e5-default-rtdb.firebaseio.com/galleria/${ id }.json`);
  }

  buscarGalleriaItem( termino: string ) {

    if ( this.galleria.length === 0 ) {
      // Si no esta cargado se carga
      this.cargarGalleria().then( () => {
        // Despues de obtener los elementos filtramos
        this.filtrarGalleria( termino );
      })
    } else {
      // aplica filtro
      this.filtrarGalleria( termino );
    }

    // this.galleriaFiltrada = this.galleria.filter( galleria => {
    //   return true;
    // });
    // console.log( this.galleriaFiltrada );
  }

  filtrarGalleria( termino: string ) {

    this.galleriaFiltrada = [];

    termino = termino.toLocaleLowerCase();

    this.galleria.forEach( gall => {

      const tituloLower = gall.titulo.toLocaleLowerCase();

      if ( gall.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.galleriaFiltrada.push( gall ); 
      }
    });
  }

}
