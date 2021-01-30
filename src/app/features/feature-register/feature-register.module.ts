import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRegisterComponent } from './feature-register.component';
import { FeatureRegisterRoutingModule } from './feature-register-routing.module';
import { InputComponent } from 'src/app/shared/ui-components/forms/input/input.component';
import { InputModule } from 'src/app/shared/ui-components/forms/input/input.module';

@NgModule({
  declarations: [FeatureRegisterComponent],
  imports: [CommonModule, FeatureRegisterRoutingModule, InputModule],
})
export class FeatureRegisterModule {}
