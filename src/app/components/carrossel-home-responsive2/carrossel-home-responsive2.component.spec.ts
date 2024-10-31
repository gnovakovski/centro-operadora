/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarrosselHomeResponsive2Component } from './carrossel-home-responsive2.component';

describe('CarrosselHomeResponsive2Component', () => {
  let component: CarrosselHomeResponsive2Component;
  let fixture: ComponentFixture<CarrosselHomeResponsive2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosselHomeResponsive2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosselHomeResponsive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
