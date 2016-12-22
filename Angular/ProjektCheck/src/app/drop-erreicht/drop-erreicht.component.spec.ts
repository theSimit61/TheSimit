/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropErreichtComponent } from './drop-erreicht.component';

describe('DropErreichtComponent', () => {
  let component: DropErreichtComponent;
  let fixture: ComponentFixture<DropErreichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropErreichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropErreichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
