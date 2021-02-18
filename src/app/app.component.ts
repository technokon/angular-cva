import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cva-app';

  subscriptions = new Subscription();
  someControl: FormControl = new FormControl('Hello');
  constructor() { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.someControl.valueChanges
        .subscribe(_ => {
          console.log(_);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
