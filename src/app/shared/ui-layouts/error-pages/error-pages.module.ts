import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonErrorPageComponent } from './common-error-page/common-error-page.component';
import { ErrorRoutingModule } from './error-pages-routing.module';

@NgModule({
  declarations: [CommonErrorPageComponent],
  imports: [CommonModule, ErrorRoutingModule],
})
export class ErrorPagesModule {}
