import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMgmtComponent } from './admin-mgmt.component';

describe('AdminMgmtComponent', () => {
  let component: AdminMgmtComponent;
  let fixture: ComponentFixture<AdminMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
