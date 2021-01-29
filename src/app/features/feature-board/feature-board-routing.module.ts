import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/core/routes';

const boardRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    redirectTo: APP_ROUTES.board.posts.path,
    pathMatch: 'full',
  },
  {
    path: APP_ROUTES.board.posts.path,
    loadChildren: () => {
      return import('../feature-board/board/posts/posts.module').then(
        (module) => module.PostsModule
      );
    },
  },
  {
    path: APP_ROUTES.board.map.path,
    loadChildren: () => {
      return import('../feature-board/board/map/map.module').then(
        (module) => module.MapModule
      );
    },
  },

  {
    path: '**',
    redirectTo: APP_ROUTES.page_not_found.path,
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(boardRoutes), CommonModule],
  exports: [RouterModule],
})
export class FeatureBoardRoutingModule {}
