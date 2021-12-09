import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructordetailComponent } from './instructordetail.component';

describe('InstructordetailComponent', () => {
  let component: InstructordetailComponent;
  let fixture: ComponentFixture<InstructordetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructordetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
