import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ItemComponent } from './pages/item/item.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: GalleryComponent 
  },
  { 
    path: 'about', 
    component: AboutComponent 
  },
  { 
    path: 'item/:id', 
    component: ItemComponent 
  },
  { 
    path: '**', 
    pathMatch: 'full',
    redirectTo: 'home' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
