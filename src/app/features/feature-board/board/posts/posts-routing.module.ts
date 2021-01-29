import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTES } from 'src/app/core/routes';
import { PostsComponent } from './posts.component';

const postsRoutes: Routes = [
  {
    path: APP_ROUTES.path,
    component: PostsComponent,
  },
  {
    path: '**',
    redirectTo: APP_ROUTES.page_not_found.path,
    pathMatch: 'full',
  },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(postsRoutes), CommonModule],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
