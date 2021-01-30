import { Component, OnInit } from '@angular/core';
import { APP_ROUTES } from 'src/app/core/routes';
import { URL_LOGOS } from 'src/app/core/urls';
export interface HeaderButton {
  name: string;
  aria_label: string;
  tooltip: string;
  routerLink: string;
}

export const HEADER_BUTTONS: HeaderButton[] = [
  {
    aria_label: 'Go to the user profile',
    name: 'Profile',
    tooltip: 'User profile',
    routerLink: '/' + APP_ROUTES.profile.path,
  },
  {
    aria_label: 'Go to the user posts view',
    name: 'Posts',
    tooltip: 'User posts',
    routerLink: APP_ROUTES.board.path + '/' + APP_ROUTES.board.posts.path,
  },
  {
    aria_label: 'Go to the user friends view',
    name: 'Friends',
    tooltip: 'User friends',
    routerLink: '/' + APP_ROUTES.friends.path,
  },
];
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  urlImages = URL_LOGOS;
  buttons: HeaderButton[] = HEADER_BUTTONS;
}
