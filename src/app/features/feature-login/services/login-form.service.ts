import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { LoginFormControls, LOGIN_FORM_CONTROLS } from './login-form.model';

export class LoginPayload {
  username: string;
  password: string;
  remember: boolean;
}

@Injectable()
export class LoginFormService {
  constructor(private fb: FormBuilder) {}

  getForm(): FormGroup {
    const formGroup: FormGroup = this.fb.group({
      [LOGIN_FORM_CONTROLS.username]: [null, Validators.required],
      [LOGIN_FORM_CONTROLS.password]: [null, Validators.required],
      [LOGIN_FORM_CONTROLS.remember]: [true],
    });
    return formGroup;
  }

  getControls(form: FormGroup): LoginFormControls {
    return {
      username: form.get(LOGIN_FORM_CONTROLS.username) as FormControl,
      password: form.get(LOGIN_FORM_CONTROLS.password) as FormControl,
      remember: form.get(LOGIN_FORM_CONTROLS.remember) as FormControl,
    };
  }

  getFormValue(controls: LoginFormControls): LoginPayload {
    return {
      username: controls.username.value,
      password: controls.password.value,
      remember: controls.remember.value,
    };
  }
}
