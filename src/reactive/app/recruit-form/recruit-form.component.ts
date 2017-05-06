import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecruitService } from '../../../shared/recruit.service';

@Component({
  selector: '[appRecruitForm]',
  templateUrl: './recruit-form.component.html',
  styleUrls: ['./recruit-form.component.scss']
})
export class RecruitFormComponent {
  form;

  constructor(private recruitService: RecruitService,
              formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      name: '',
      nickname: '',
      port: '',
      favoriteColor: ''
    });
  }

  onSubmit(formValue) {
    this.recruitService.save(formValue);
  }

  onLoad() {
    const recruit = this.recruitService.get();
    this.form.patchValue(recruit);
  }
}
