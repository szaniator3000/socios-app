import { FormControl } from '@angular/forms';

export type LoginControl = 'username' | 'password' | 'remember';

export const LOGIN_FORM_CONTROLS: Record<LoginControl, string> = {
  username: 'username',
  password: 'password',
  remember: 'remeber',
};

export interface LoginFormControls {
  username: FormControl;
  password: FormControl;
  remember: FormControl;
}
