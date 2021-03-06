import { Directive, forwardRef } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { RecruitService } from './recruit.service';
@Directive({
  selector: '[appNicknameUnique][formControl], [appNicknameUnique][formControlName], [appNicknameUnique][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => NicknameUniqueDirective),
      multi: true
    }
  ]
})
export class NicknameUniqueDirective implements Validator {
  constructor(private recruitService: RecruitService) {
  }

  validate(c: AbstractControl): ValidationErrors | any {
    if (!c.value) {
      return null;
    }
    if (this.recruitService.nicknameInUse(c.value)) {
      return {nicknameUnique: {valid: false}};
    } else {
      return null;
    }
  }
}
