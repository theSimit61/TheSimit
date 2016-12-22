/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropSchuleComponent } from './drop-schule.component';

describe('DropSchuleComponent', () => {
  let component: DropSchuleComponent;
  let fixture: ComponentFixture<DropSchuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropSchuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropSchuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
