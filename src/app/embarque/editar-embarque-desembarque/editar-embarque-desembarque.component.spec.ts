/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EditarEmbarqueDesembarqueComponent } from './editar-embarque-desembarque.component';

describe('EditarEmbarqueDesembarqueComponent', () => {
  let component: EditarEmbarqueDesembarqueComponent;
  let fixture: ComponentFixture<EditarEmbarqueDesembarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarEmbarqueDesembarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarEmbarqueDesembarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
