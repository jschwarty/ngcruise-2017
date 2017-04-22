import { AfterContentInit, Component, ContentChild, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-name-field',
  templateUrl: './name-field.component.html',
  styleUrls: ['./name-field.component.scss']
})
export class NameFieldComponent implements AfterContentInit {
  @Input() label;
  @ContentChild(NgControl) control;
  isWanted = false;

  ngAfterContentInit(): void {
    this.control.valueChanges
      .subscribe(value => {
        this.isWanted = value.toLowerCase() === 'jack sparrow';
      });
  }

}
