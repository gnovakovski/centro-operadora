/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarrosselHomeResponsive1Component } from './carrossel-home-responsive1.component';

describe('CarrosselHomeResponsive1Component', () => {
  let component: CarrosselHomeResponsive1Component;
  let fixture: ComponentFixture<CarrosselHomeResponsive1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosselHomeResponsive1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosselHomeResponsive1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
