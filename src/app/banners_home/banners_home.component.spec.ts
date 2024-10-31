/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Banners_homeComponent } from './banners_home.component';

describe('Banners_homeComponent', () => {
  let component: Banners_homeComponent;
  let fixture: ComponentFixture<Banners_homeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Banners_homeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Banners_homeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
