/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StoreWindowComponent } from './store-window.component';

describe('StoreWindowComponent', () => {
  let component: StoreWindowComponent;
  let fixture: ComponentFixture<StoreWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StoreWindowComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
