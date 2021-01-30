import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryButtonComponent } from './primary-button.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PrimaryButtonComponent],
  imports: [CommonModule, MatTooltipModule, RouterModule],
  exports: [PrimaryButtonComponent],
})
export class PrimaryButtonModule {}
