import { Component, Input } from '@angular/core';
import { BaseButtonDirective } from '../base.button';

@Component({
  selector: 'primary-button',
  templateUrl: './primary-button.component.html',
  styleUrls: ['./primary-button.component.css'],
})
export class PrimaryButtonComponent extends BaseButtonDirective {
  @Input() link: string;
}
