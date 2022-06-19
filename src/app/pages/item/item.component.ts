import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleriaService } from 'src/app/services/galleria.service';
import { itemGalleriaPagina } from '../../interfaces/item-galleria.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  itemGalleria: itemGalleriaPagina = {} as itemGalleriaPagina;
  id:string = '';

  constructor(
    private route: ActivatedRoute,
    public galleriaService: GalleriaService
  ) { }

  ngOnInit(): void {

    this.route.params
        .subscribe( parametros => {
          this.galleriaService.getGalleria( parametros['id'] )
              .subscribe( galleria => {
                this.id = parametros['id'];
                this.itemGalleria = galleria;
              });
        });
          // next: ( parametros ) => {
          //   this.galleriaService.getGalleria( parametros['id'] )
          //       .subscribe(( galleria: itemGalleriaPagina ) => {
          //         console.log(  );
          //       })
          // },
          // complete: () => {},
          // error: () => {}

          // parametros => {
          // console.log( parametros['id'] );
          // Para ejecutarse se usa el Subscribe
          // this.galleriaService.getGalleria( parametros['id'] )
          //     .subscribe( galleria:itemGalleriaPagina => {
          //       console.log(  );
          //     });
  }

}
