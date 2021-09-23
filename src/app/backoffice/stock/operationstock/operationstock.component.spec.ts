import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationstockComponent } from './operationstock.component';

describe('OperationstockComponent', () => {
  let component: OperationstockComponent;
  let fixture: ComponentFixture<OperationstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
