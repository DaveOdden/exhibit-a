import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroInteractionsDisableBtnDuringApiCallComponent } from './micro-interactions-disable-btn-during-api-call.component';

describe('MicroInteractionsDisableBtnDuringApiCallComponent', () => {
  let component: MicroInteractionsDisableBtnDuringApiCallComponent;
  let fixture: ComponentFixture<MicroInteractionsDisableBtnDuringApiCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroInteractionsDisableBtnDuringApiCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroInteractionsDisableBtnDuringApiCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
