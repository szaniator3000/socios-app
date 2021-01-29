import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureBoardRoutingModule } from './feature-board-routing.module';
import { BoardComponent } from './board/board.component';
import { PostsComponent } from './board/posts/posts.component';
import { MapComponent } from './board/map/map.component';

@NgModule({
  declarations: [BoardComponent, PostsComponent, MapComponent],
  imports: [CommonModule, FeatureBoardRoutingModule],
})
export class FeatureBoardModule {}
