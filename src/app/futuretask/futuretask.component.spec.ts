import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuturetaskComponent } from './futuretask.component';

describe('FuturetaskComponent', () => {
  let component: FuturetaskComponent;
  let fixture: ComponentFixture<FuturetaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuturetaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuturetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
