import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterLogListComponent } from './recruiter-log-list.component';

describe('RecruiterLogListComponent', () => {
  let component: RecruiterLogListComponent;
  let fixture: ComponentFixture<RecruiterLogListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterLogListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterLogListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
