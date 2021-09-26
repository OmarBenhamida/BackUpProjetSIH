import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedemandefichepaieComponent } from './managedemandefichepaie.component';

describe('ManagedemandefichepaieComponent', () => {
  let component: ManagedemandefichepaieComponent;
  let fixture: ComponentFixture<ManagedemandefichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagedemandefichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedemandefichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
