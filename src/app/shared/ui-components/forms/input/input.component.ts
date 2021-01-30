import { ChangeDetectorRef, Optional, Self } from '@angular/core';
import { Renderer2 } from '@angular/core';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';
let nextUniqueId: number = 0;
export type Type = 'text' | 'number' | 'hidden' | 'email' | 'password';

@Component({
  selector: 'socios-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent
  implements ControlValueAccessor, AfterViewInit, OnDestroy {
  @Input() disableAutocomplete?: boolean = true;
  @Input() type?: Type = 'text';
  @Input() style: {
    [klass: string]: any;
  } | null;

  @Input() public placeholder: string = '';

  @ViewChild('input', { static: true }) public input: ElementRef;

  private _uniqueId: string = `socios-input-${++nextUniqueId}`;
  @Input() id: string = this._uniqueId;
  @Input() testId: string;

  @Input()
  set disabled(value: boolean) {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', value);
  }

  set value(value: any) {
    this._value = value;
  }

  get inputId(): string {
    return `${this.id || this._uniqueId}-input`;
  }

  _value: any = null;
  private sub: Subscription = new Subscription();

  constructor(
    private cdr: ChangeDetectorRef,
    private renderer: Renderer2,
    @Self() @Optional() public ngControl: NgControl
  ) {
    if (this.ngControl !== null) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngAfterViewInit(): void {
    if (this.ngControl !== null) {
      this.sub = this.ngControl.statusChanges.subscribe(() =>
        this.cdr.markForCheck()
      );
    }
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  writeValue(value: any): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  handleValueChange(value: any): void {
    this.value = value;
    this.onChange(this._value);
  }

  onChange = (_: any) => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onTouched = () => {};

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  showPlaceholder(): boolean {
    if (!this.ngControl) return true;
    return !(this.ngControl.touched && this.ngControl.invalid);
  }

  setDisabledState(isDisabled: boolean): void {
    this.renderer.setProperty(this.input.nativeElement, 'disabled', isDisabled);
  }
}
