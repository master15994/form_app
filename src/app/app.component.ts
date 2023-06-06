import { Component, Inject, Injector, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private fb = inject(FormBuilder);
  formGroup = this.fb.group({
    password: this.fb.control(null).[Validators.required],
    username: this.fb.control(null).[Validators],
    remeberMe: this.fb.control(null),
  });

  ngOnInit(): void {
    this.formGroup.valueChanges.subscribe((sub) => console.log(sub));
  }
}
