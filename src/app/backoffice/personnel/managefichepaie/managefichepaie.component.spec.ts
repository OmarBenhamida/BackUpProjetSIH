import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefichepaieComponent } from './managefichepaie.component';

describe('ManagefichepaieComponent', () => {
  let component: ManagefichepaieComponent;
  let fixture: ComponentFixture<ManagefichepaieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagefichepaieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagefichepaieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
