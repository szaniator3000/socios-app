import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { PrimaryButtonModule } from '../buttons/primary-button/primary-button.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule, RouterModule, PrimaryButtonModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
