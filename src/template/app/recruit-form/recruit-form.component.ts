import { Component } from '@angular/core';
import { RecruitService } from '../recruit.service';

@Component({
  selector: '[appRecruitForm]',
  templateUrl: './recruit-form.component.html',
  styleUrls: ['./recruit-form.component.scss']
})
export class RecruitFormComponent {
  recruit;

  constructor(private recruitService: RecruitService) {
    this.recruit = {
      name: '',
      nickname: '',
      port: ''
    };
  }

  onSubmit(formValue) {
    this.recruitService.save(formValue);
  }

  onLoad() {
    this.recruit = this.recruitService.get();
  }
}
