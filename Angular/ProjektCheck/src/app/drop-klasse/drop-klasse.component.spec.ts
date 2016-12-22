/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DropKlasseComponent } from './drop-klasse.component';

describe('DropKlasseComponent', () => {
  let component: DropKlasseComponent;
  let fixture: ComponentFixture<DropKlasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropKlasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropKlasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
