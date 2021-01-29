import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLoginComponent } from './feature-login.component';
import { FeatureLoginRoutingModule } from './feature-register-routing.module';

@NgModule({
  declarations: [FeatureLoginComponent],
  imports: [CommonModule, FeatureLoginRoutingModule],
})
export class FeatureLoginModule {}
