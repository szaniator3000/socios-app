import { Input, EventEmitter, Output, Directive } from '@angular/core';

@Directive()
export class BaseButtonDirective {
  @Input() ariaLabel: string;
  @Input() testId: string;
  @Input() type: string = 'button';
  @Input() disabled: boolean;
  @Input() visible: boolean;
  @Output() handleOnClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  onClick(event: MouseEvent): void {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    } else {
      this.handleOnClick.emit(event);
    }
  }
}
