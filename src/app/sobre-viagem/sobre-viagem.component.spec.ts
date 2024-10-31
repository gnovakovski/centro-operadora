/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SobreViagemComponent } from './sobre-viagem.component';

describe('SobreViagemComponent', () => {
  let component: SobreViagemComponent;
  let fixture: ComponentFixture<SobreViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SobreViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
