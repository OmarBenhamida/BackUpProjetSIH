import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageafectationpostComponent } from './manageafectationpost.component';

describe('ManageafectationpostComponent', () => {
  let component: ManageafectationpostComponent;
  let fixture: ComponentFixture<ManageafectationpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageafectationpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageafectationpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
