import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorqueriesComponent } from './instructorqueries.component';

describe('InstructorqueriesComponent', () => {
  let component: InstructorqueriesComponent;
  let fixture: ComponentFixture<InstructorqueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorqueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorqueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
