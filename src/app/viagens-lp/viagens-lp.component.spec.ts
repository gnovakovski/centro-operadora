/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ViagensLpComponent } from './viagens-lp.component';

describe('ViagensLpComponent', () => {
  let component: ViagensLpComponent;
  let fixture: ComponentFixture<ViagensLpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViagensLpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViagensLpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
