/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropKompetenzComponent } from './drop-kompetenz.component';

describe('DropKompetenzComponent', () => {
  let component: DropKompetenzComponent;
  let fixture: ComponentFixture<DropKompetenzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropKompetenzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropKompetenzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
