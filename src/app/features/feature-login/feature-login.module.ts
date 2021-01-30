import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureLoginComponent } from './feature-login.component';
import { FeatureLoginRoutingModule } from './feature-register-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from 'src/app/shared/ui-components/forms/input/input.module';

@NgModule({
  declarations: [FeatureLoginComponent],
  imports: [
    CommonModule,
    FeatureLoginRoutingModule,
    ReactiveFormsModule,
    InputModule,
  ],
})
export class FeatureLoginModule {}
