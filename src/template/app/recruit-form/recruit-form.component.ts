import { Component, ViewChild } from '@angular/core';
import { RecruitService } from '../../../shared/recruit.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: '[appRecruitForm]',
  templateUrl: './recruit-form.component.html',
  styleUrls: ['./recruit-form.component.scss']
})
export class RecruitFormComponent {
  @ViewChild(NgForm) ngForm;

  constructor(private recruitService: RecruitService) {
  }

  onSubmit(formValue) {
    this.recruitService.save(formValue);
  }

  onLoad() {
    const recruit = this.recruitService.get();
    this.ngForm.form.patchValue(recruit);
  }
}
