import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemsDataComponent } from './update-items-data.component';

describe('UpdateItemsDataComponent', () => {
  let component: UpdateItemsDataComponent;
  let fixture: ComponentFixture<UpdateItemsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateItemsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateItemsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
