import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecruitFormComponent } from './recruit-form/recruit-form.component';
import { RecruitService } from '../../shared/recruit.service';
import { NicknameUniqueValidatorDirective } from '../../shared/nickname-unique.validator';

@NgModule({
  declarations: [
    AppComponent,
    RecruitFormComponent,
    NicknameUniqueValidatorDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    RecruitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
