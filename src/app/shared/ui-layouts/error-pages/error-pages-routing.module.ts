import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/core/routes';
import { CommonErrorPageComponent } from './common-error-page/common-error-page.component';

const errorRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    component: CommonErrorPageComponent,
  },

  {
    path: '**',
    redirectTo: APP_ROUTES.page_not_found.path,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(errorRoutes), CommonModule],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
