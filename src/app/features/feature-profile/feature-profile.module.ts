import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { FeatureProfileRoutingModule } from './feature-profile-routing.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, FeatureProfileRoutingModule],
})
export class FeatureProfileModule {}
