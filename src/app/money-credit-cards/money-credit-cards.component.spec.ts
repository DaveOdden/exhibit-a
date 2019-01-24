import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyCreditCardsComponent } from './money-credit-cards.component';

describe('MoneyCreditCardsComponent', () => {
  let component: MoneyCreditCardsComponent;
  let fixture: ComponentFixture<MoneyCreditCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyCreditCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyCreditCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
