import {Component, forwardRef, OnInit} from "@angular/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MyFormComponent,
      multi: true,
    },
  ]
})
export class MyFormComponent implements OnInit, ControlValueAccessor {

  something = null;
  private onChange = (_: any) => {};

  constructor() {
  }

  registerOnTouched(fn: any): void {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  writeValue(obj: any): void {
    // model -> template
    this.something = obj;
  }

  ngOnInit(): void {
  }

  onClick(): void {
    this.onChange(`Clicked ${this.something}`);
  }

}
