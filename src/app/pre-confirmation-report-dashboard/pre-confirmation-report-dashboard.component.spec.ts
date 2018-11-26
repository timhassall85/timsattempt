import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreConfirmationReportDashboardComponent } from './pre-confirmation-report-dashboard.component';

describe('PreConfirmationReportDashboardComponent', () => {
  let component: PreConfirmationReportDashboardComponent;
  let fixture: ComponentFixture<PreConfirmationReportDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreConfirmationReportDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreConfirmationReportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
