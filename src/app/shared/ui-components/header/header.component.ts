import { Component, OnInit } from '@angular/core';
import { URL_LOGOS } from 'src/app/core/urls';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  urlImages = URL_LOGOS;
}
