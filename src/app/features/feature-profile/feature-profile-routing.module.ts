import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { APP_ROUTES } from 'src/app/core/routes';

const appRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    component: ProfileComponent,
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
export class FeatureProfileRoutingModule {}
