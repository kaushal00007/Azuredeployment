import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrolluserComponent } from './enrolluser.component';

describe('EnrolluserComponent', () => {
  let component: EnrolluserComponent;
  let fixture: ComponentFixture<EnrolluserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnrolluserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnrolluserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
