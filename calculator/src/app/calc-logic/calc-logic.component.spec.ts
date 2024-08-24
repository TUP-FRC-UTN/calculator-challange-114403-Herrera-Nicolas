import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcLogicComponent } from './calc-logic.component';

describe('CalcLogicComponent', () => {
  let component: CalcLogicComponent;
  let fixture: ComponentFixture<CalcLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcLogicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CalcLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
