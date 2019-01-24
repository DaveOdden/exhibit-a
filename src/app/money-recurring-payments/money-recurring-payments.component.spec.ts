import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyRecurringPaymentsComponent } from './money-recurring-payments.component';

describe('MoneyRecurringPaymentsComponent', () => {
  let component: MoneyRecurringPaymentsComponent;
  let fixture: ComponentFixture<MoneyRecurringPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyRecurringPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyRecurringPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
