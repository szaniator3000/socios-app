import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/core/routes';
import { FeatureLoginComponent } from './feature-login.component';

const appRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    component: FeatureLoginComponent,
  },

  {
    path: '**',
    redirectTo: APP_ROUTES.page_not_found.path,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(appRoutes), CommonModule],
  exports: [RouterModule],
})
export class FeatureLoginRoutingModule {}
