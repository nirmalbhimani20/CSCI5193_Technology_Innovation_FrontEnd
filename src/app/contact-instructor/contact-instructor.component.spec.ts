import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInstructorComponent } from './contact-instructor.component';

describe('ContactInstructorComponent', () => {
  let component: ContactInstructorComponent;
  let fixture: ComponentFixture<ContactInstructorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactInstructorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactInstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
