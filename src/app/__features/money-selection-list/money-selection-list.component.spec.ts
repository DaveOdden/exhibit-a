import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneySelectionListComponent } from './money-selection-list.component';

describe('MoneySelectionListComponent', () => {
  let component: MoneySelectionListComponent;
  let fixture: ComponentFixture<MoneySelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneySelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneySelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
