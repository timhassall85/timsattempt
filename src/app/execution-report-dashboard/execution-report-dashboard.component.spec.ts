import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionReportDashboardComponent } from './execution-report-dashboard.component';

describe('ExecutionReportDashboardComponent', () => {
  let component: ExecutionReportDashboardComponent;
  let fixture: ComponentFixture<ExecutionReportDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutionReportDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutionReportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
