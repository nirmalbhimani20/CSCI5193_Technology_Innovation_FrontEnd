import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructorblogComponent } from './instructorblog.component';

describe('InstructorblogComponent', () => {
  let component: InstructorblogComponent;
  let fixture: ComponentFixture<InstructorblogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructorblogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructorblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
