import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevioustaskComponent } from './previoustask.component';

describe('PrevioustaskComponent', () => {
  let component: PrevioustaskComponent;
  let fixture: ComponentFixture<PrevioustaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevioustaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevioustaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
