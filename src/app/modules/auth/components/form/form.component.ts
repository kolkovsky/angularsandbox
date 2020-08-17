import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
})
export class FormComponent implements OnInit {
  public formGroup: FormGroup;
  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.initLoginForm();
  }

  public initLoginForm(): void {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.maxLength(120)]),
      password: new FormControl("", [Validators.required, Validators.max(30)]),
    });
  }

  public login(): void {
    this.router.navigateByUrl("/dashboard").then((isNavigated: boolean) => console.log(isNavigated));
  }
}
