import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecruitFormComponent } from './recruit-form/recruit-form.component';
import { RecruitService } from '../../shared/recruit.service';
import { NicknameUniqueValidatorDirective } from '../../shared/nickname-unique.validator';
import { NameFieldComponent } from '../../shared/name-field/name-field.component';

@NgModule({
  declarations: [
    AppComponent,
    RecruitFormComponent,
    NicknameUniqueValidatorDirective,
    NameFieldComponent
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
