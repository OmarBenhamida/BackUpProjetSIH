import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichederenseignementComponent } from './fichederenseignement.component';

describe('FichederenseignementComponent', () => {
  let component: FichederenseignementComponent;
  let fixture: ComponentFixture<FichederenseignementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichederenseignementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichederenseignementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
