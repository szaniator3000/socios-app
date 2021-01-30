import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { of, Subject, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { URL_LOGOS } from 'src/app/core/urls';
import { SubSink } from 'subsink';
import { LoginFormControls } from './services/login-form.model';
import { LoginFormService, LoginPayload } from './services/login-form.service';

@Component({
  selector: 'app-feature-login',
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.css'],
  providers: [LoginFormService],
})
export class FeatureLoginComponent implements OnInit, OnDestroy {
  urlImages = URL_LOGOS;
  form: FormGroup;
  controls: LoginFormControls;
  private loginOnSubmit$: Subject<void> = new Subject<void>();
  private subSink: SubSink = new SubSink();

  constructor(
    private loginFormService: LoginFormService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.form = this.loginFormService.getForm();
    this.controls = this.loginFormService.getControls(this.form);
    this.watchOnLogin();
  }

  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    this.loginOnSubmit$.next();
  }

  private watchOnLogin() {
    this.subSink.sink = this.loginOnSubmit$
      .pipe(
        switchMap(() => {
          let loginPayload: LoginPayload = this.loginFormService.getFormValue(
            this.controls
          );
          this.authService.login(loginPayload.username, loginPayload.password);
          if (loginPayload.remember === false)
            localStorage.removeItem('currentUser');
          return of(this.loginFormService.getFormValue(this.controls));
        }),
        catchError((err) => {
          alert('Login failed!');
          return throwError(err);
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
