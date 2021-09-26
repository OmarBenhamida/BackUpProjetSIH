import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedemandecongeComponent } from './managedemandeconge.component';

describe('ManagedemandecongeComponent', () => {
  let component: ManagedemandecongeComponent;
  let fixture: ComponentFixture<ManagedemandecongeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedemandecongeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedemandecongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
