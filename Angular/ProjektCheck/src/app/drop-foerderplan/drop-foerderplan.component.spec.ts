/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropFoerderplanComponent } from './drop-foerderplan.component';

describe('DropFoerderplanComponent', () => {
  let component: DropFoerderplanComponent;
  let fixture: ComponentFixture<DropFoerderplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropFoerderplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropFoerderplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
