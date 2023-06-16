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
  status: string = '';
  onChange = (pass) => {};
  onTouch: () => {};
  checkPasswordStrength(e : any){
    this.pass = e.target.value;
    const hasLetters = /[a-zA-Z]/.test(this.pass);
    const hasSymbols = /[^\w\s]/.test(this.pass);
    const hasNumbers = /\d/.test(this.pass);
    this.onChange(this.pass);
    if (this.pass.length === 0) {
      this.status = 'untouched';
      return;
    }
    if (this.pass.length > 0&&this.pass.length < 8) {
      this.status = 'invalid';
      return;
    }
    if(hasLetters && hasSymbols && hasNumbers){
      this.status = 'hard';
      return;
    }
    if (hasLetters && hasSymbols || hasSymbols && hasNumbers || hasLetters && hasNumbers) {
      this.status = 'medium';
      return;
    }
    if (hasNumbers || hasLetters || hasSymbols) {
      this.status = 'easy';
      return;
    }
  }
  getColorSecionFirst(status: string): string {
    switch (status) {
      case 'invalid':
      case 'easy':
        return 'red';
      case 'medium':
        return 'yellow';
      case 'hard':
        return 'green';
      case 'untouched':
      default :
        return 'gray';
    }
  }

  getColorSecionSecond(status: string): string {
    switch (status) {
      case 'invalid':
        return 'red';
      case 'medium':
        return 'yellow';
      case 'hard':
        return 'green';
      case 'untouched':
      case 'easy':
      default :
        return 'gray';
    }
  }

  getColorSecionThird(status: string): string {
    switch (status) {
      case 'invalid':
        return 'red';
      case 'hard':
        return 'green';
      case 'untouched':
      case 'easy':
      case 'medium':
      default :
        return 'gray';
    }
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
      this.onTouch = fn;
  }

  writeValue(value: string): void {
    this.pass = value;
  }

}
