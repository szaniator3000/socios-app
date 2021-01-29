import { Component, OnInit } from '@angular/core';
import { URL_LOGOS } from 'src/app/core/urls';

@Component({
  selector: 'app-feature-login',
  templateUrl: './feature-login.component.html',
  styleUrls: ['./feature-login.component.css'],
})
export class FeatureLoginComponent implements OnInit {
  urlImages = URL_LOGOS;

  constructor() {}

  ngOnInit(): void {}
}
