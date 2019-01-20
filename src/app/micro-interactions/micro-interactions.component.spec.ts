import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroInteractionsComponent } from './micro-interactions.component';

describe('MicroInteractionsComponent', () => {
  let component: MicroInteractionsComponent;
  let fixture: ComponentFixture<MicroInteractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroInteractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroInteractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
