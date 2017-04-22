import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecruitFormComponent } from './recruit-form/recruit-form.component';
import { RecruitService } from '../../shared/recruit.service';
import { NicknameUniqueDirective } from '../../shared/nickname-unique.directive';
import { NameFieldComponent } from '../../shared/name-field/name-field.component';

@NgModule({
  declarations: [
    AppComponent,
    RecruitFormComponent,
    NicknameUniqueDirective,
    NameFieldComponent
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
