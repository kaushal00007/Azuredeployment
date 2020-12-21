import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomethingWrongDialogComponent } from './something-wrong-dialog.component';

describe('SomethingWrongDialogComponent', () => {
  let component: SomethingWrongDialogComponent;
  let fixture: ComponentFixture<SomethingWrongDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomethingWrongDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomethingWrongDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
