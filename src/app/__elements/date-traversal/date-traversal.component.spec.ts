import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateTraversalComponent } from './date-traversal.component';

describe('DateTraversalComponent', () => {
  let component: DateTraversalComponent;
  let fixture: ComponentFixture<DateTraversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateTraversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateTraversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
