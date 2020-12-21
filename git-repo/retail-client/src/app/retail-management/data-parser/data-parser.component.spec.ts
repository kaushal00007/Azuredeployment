/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataParserComponent } from './data-parser.component';

describe('DataParserComponent', () => {
  let component: DataParserComponent;
  let fixture: ComponentFixture<DataParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
