import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageattestationComponent } from './manageattestation.component';

describe('ManageattestationComponent', () => {
  let component: ManageattestationComponent;
  let fixture: ComponentFixture<ManageattestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageattestationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageattestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
