import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterLogComponent } from './recruiter-log.component';

describe('RecruiterLogComponent', () => {
  let component: RecruiterLogComponent;
  let fixture: ComponentFixture<RecruiterLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruiterLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruiterLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
