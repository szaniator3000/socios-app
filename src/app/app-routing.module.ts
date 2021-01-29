import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from './core/routes';

const appRoutes: Routes = [
  { path: '', redirectTo: APP_ROUTES.board.path, pathMatch: 'full' },
  {
    path: APP_ROUTES.board.path,
    loadChildren: () => {
      return import('../app/features/feature-board/feature-board.module').then(
        (module) => module.FeatureBoardModule
      );
    },
  },
  {
    path: APP_ROUTES.profile.path,
    loadChildren: () => {
      return import(
        '../app/features/feature-profile/feature-profile.module'
      ).then((module) => module.FeatureProfileModule);
    },
  },
  {
    path: APP_ROUTES.register.path,
    loadChildren: () => {
      return import(
        '../app/features/feature-register/feature-register.module'
      ).then((module) => module.FeatureRegisterModule);
    },
  },
  {
    path: APP_ROUTES.login.path,
    loadChildren: () => {
      return import('../app/features/feature-login/feature-login.module').then(
        (module) => module.FeatureLoginModule
      );
    },
  },
  {
    path: APP_ROUTES.page_not_found.path,
    loadChildren: () => {
      return import(
        '../app/shared/ui-layouts/error-pages/error-pages.module'
      ).then((module) => module.ErrorPagesModule);
    },
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.page_not_found.path,
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    RouterModule.forChild(appRoutes),
    CommonModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
