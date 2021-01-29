import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonErrorPageComponent } from './common-error-page.component';

describe('CommonErrorPageComponent', () => {
  let component: CommonErrorPageComponent;
  let fixture: ComponentFixture<CommonErrorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonErrorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonErrorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
