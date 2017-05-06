import { Component, ContentChild, forwardRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';

@Component({
  selector: 'app-favorite-color',
  template: `
    <label [class.invalid]="ngControl.invalid">
      Favorite Color:
      <input type="text" (keyup)="onChange()" [value]="value" (blur)="onBlur()" #input>
    </label>
  `,
  styles: [`.invalid{color:red;}`],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FavoriteColorComponent),
      multi: true
    }
  ]
})
export class FavoriteColorComponent {
  @ContentChild(NgControl) ngControl;
  @ViewChild('input') input;
  private onChangeCallback;
  private onTouchedCallback;
  private value;

  onChange() {
    this.onChangeCallback(this.input.nativeElement.value);
    this.onTouchedCallback();
  }

  onBlur() {
    this.onTouchedCallback();
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }
}
