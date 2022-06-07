import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  { 
    path: '', 
    component: GalleryComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'item', 
    component: ItemComponent 
  },
  { 
    path: '**', 
    pathMatch: 'full',
    redirectTo: '' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
