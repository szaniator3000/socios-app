import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/core/routes';
import { MapComponent } from './map.component';

const mapRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    component: MapComponent,
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.page_not_found.path,
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(mapRoutes),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class MapRoutingModule {}
