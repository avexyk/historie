import { Component, OnInit } from '@angular/core';
import { GalleriaService } from 'src/app/services/galleria.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(
    public galleriaService: GalleriaService
  ) { }

  ngOnInit(): void {
  }

}
