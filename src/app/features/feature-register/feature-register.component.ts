import { Component, OnInit } from '@angular/core';
import { URL_LOGOS } from 'src/app/core/urls';

@Component({
  selector: 'app-feature-register',
  templateUrl: './feature-register.component.html',
  styleUrls: ['./feature-register.component.css'],
})
export class FeatureRegisterComponent implements OnInit {
  urlImages = URL_LOGOS;

  constructor() {}

  ngOnInit(): void {}
}
