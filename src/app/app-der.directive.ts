import { Directive, Input } from '@angular/core';
import { Validator, ValidationErrors, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { isNumber } from 'util';

@Directive({
  selector: '[appAppDer]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AppDerDirective,
    multi: true
  }]
})
export class AppDerDirective {

  @Input() public minValue: number = null;
  @Input() public maxValue: number = null;

  constructor() { }

  validate(c: AbstractControl): ValidationErrors {
   
    let result: ValidationErrors = null;
    const regex: RegExp = /^\d{4}-\d{2}-\d{2}$/g;
    if (!regex.test(c.value)) {
      result = {
        message: 'Неверный формат даты'
      }
    }
    let newDate = new Date(c.value);
    let todaysDate = new Date();
    if (newDate < todaysDate){
      result = {
        message: 'Датой урока не может быть дата раньше текущей'
      }
    }
    return result;
  }

}

