import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export class Alert {
  type: AlertType;
  message: String;
}
export type AlertType = 'SUCCESS' | 'ERROR';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private alert: BehaviorSubject<Alert> = new BehaviorSubject<Alert>(null);
  alert$: Observable<Alert> = this.alert.asObservable();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          this.keepAfterRouteChange = false;
        } else {
          this.clear();
        }
      }
    });
  }

  setSpecificAlert(
    type: AlertType,
    message: string,
    keepAfterRouteChange = false
  ): void {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.alert.next({ type, message });
  }
  private clear(): void {
    this.alert.next(null);
  }

  setAlert(alert: Alert): void {
    this.alert.next(alert);
  }
}
