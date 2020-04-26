import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAssignmentComponent } from './select-assignment.component';

describe('SelectAssignmentComponent', () => {
  let component: SelectAssignmentComponent;
  let fixture: ComponentFixture<SelectAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
