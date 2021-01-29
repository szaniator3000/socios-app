import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRegisterComponent } from './feature-register.component';
import { FeatureRegisterRoutingModule } from './feature-register-routing.module';

@NgModule({
  declarations: [FeatureRegisterComponent],
  imports: [CommonModule, FeatureRegisterRoutingModule],
})
export class FeatureRegisterModule {}
