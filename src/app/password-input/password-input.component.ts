import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-password-input',
  templateUrl: './password-input.component.html',
  styleUrls: ['./password-input.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PasswordInputComponent
    }
  ]
})

export class PasswordInputComponent implements ControlValueAccessor{
  pass : string;
  onChange: OnChangeFn<string> = () => {};
  onTouch: OnTouchFn = () => {};

  onInput(input : HTMLInputElement){
    this.pass = input.value;
    this.onChange(this.pass);
  }

  registerOnChange(fn: OnChangeFn<string>): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: OnTouchFn): void {
      this.onTouch = fn;
  }

  writeValue(value: string): void {
    this.pass = value;
  }
}
type OnChangeFn<T> = (value: T) => void;
type OnTouchFn = () => void;
