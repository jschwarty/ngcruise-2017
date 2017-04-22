import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RecruitService } from '../recruit.service';

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
      name: formBuilder.control(''),
      nickname: formBuilder.control(''),
      port: formBuilder.control('')
    });
  }

  onSubmit(formValue) {
    this.recruitService.save(formValue);
  }

  onLoad() {
    const recruit = this.recruitService.get();
    this.form.setValue(recruit);
  }
}
