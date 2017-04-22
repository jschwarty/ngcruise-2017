import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecruitFormComponent } from './recruit-form/recruit-form.component';
import { RecruitService } from './recruit.service';
import { NicknameUniqueValidatorDirective } from './nickname-unique.validator';

@NgModule({
  declarations: [
    AppComponent,
    RecruitFormComponent,
    NicknameUniqueValidatorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    RecruitService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
