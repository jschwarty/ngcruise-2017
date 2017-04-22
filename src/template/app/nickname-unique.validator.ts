import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { RecruitService } from './recruit.service';
@Directive({
  selector: '[appNicknameUnique]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NicknameUniqueValidatorDirective),
      multi: true
    }
  ]
})
export class NicknameUniqueValidatorDirective implements Validator {
  constructor(private recruitService: RecruitService) {
  }

  validate(c: AbstractControl): ValidationErrors | any {
    if (!c.value) {
      return null;
    }
    if (this.recruitService.nicknameInUse(c.value)) {
      return {nicknameInUse: {valid: false}};
    } else {
      return null;
    }
  }
}
