/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropFragenComponent } from './drop-fragen.component';

describe('DropFragenComponent', () => {
  let component: DropFragenComponent;
  let fixture: ComponentFixture<DropFragenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropFragenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropFragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
