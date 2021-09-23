import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisiplineComponent } from './disipline.component';

describe('DisiplineComponent', () => {
  let component: DisiplineComponent;
  let fixture: ComponentFixture<DisiplineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisiplineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisiplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
