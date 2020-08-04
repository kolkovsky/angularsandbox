import { AbstractControl, ValidatorFn, FormGroup, ValidationErrors } from "@angular/forms";

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  const password: AbstractControl = formGroup.get("password");
  const repeatPassword: AbstractControl = formGroup.get("repeatPassword");
  return password.value !== repeatPassword.value ? { passwordMatch: true } : null;
};
