import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagecongeComponent } from './manageconge.component';

describe('ManagecongeComponent', () => {
  let component: ManagecongeComponent;
  let fixture: ComponentFixture<ManagecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagecongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
