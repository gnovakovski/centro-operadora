/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarrosselHomeResponsive3Component } from './carrossel-home-responsive3.component';

describe('CarrosselHomeResponsive3Component', () => {
  let component: CarrosselHomeResponsive3Component;
  let fixture: ComponentFixture<CarrosselHomeResponsive3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrosselHomeResponsive3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrosselHomeResponsive3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
