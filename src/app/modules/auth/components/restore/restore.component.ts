import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-restore",
  templateUrl: "./restore.component.html",
})
export class RestoreComponent implements OnInit {
  public formGroup: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.initRestoreForm();
  }

  public initRestoreForm(): void {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.required]),
    });
  }
}
