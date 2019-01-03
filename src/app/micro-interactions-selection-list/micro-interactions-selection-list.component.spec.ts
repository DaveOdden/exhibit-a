import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroInteractionsSelectionListComponent } from './micro-interactions-selection-list.component';

describe('MicroInteractionsSelectionListComponent', () => {
  let component: MicroInteractionsSelectionListComponent;
  let fixture: ComponentFixture<MicroInteractionsSelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroInteractionsSelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroInteractionsSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
