import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { passwordMatchValidator } from "src/app/utils/repeat-password.validator";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
})
export class RegistrationComponent implements OnInit {
  public formGroup: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.initRegistrationForm();
  }

  public initRegistrationForm(): void {
    this.formGroup = new FormGroup(
      {
        firstName: new FormControl("", [Validators.required]),
        lastName: new FormControl("", [Validators.required]),
        email: new FormControl("", [Validators.required]),
        password: new FormControl("", [Validators.required]),
        repeatPassword: new FormControl("", [Validators.required]),
      },
      {
        validators: passwordMatchValidator,
      }
    );
  }

  private getPasswordValue(): string {
    return this.formGroup?.controls["password"].value;
  }
}
