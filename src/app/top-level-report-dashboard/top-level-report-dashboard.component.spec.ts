import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLevelReportDashboardComponent } from './top-level-report-dashboard.component';

describe('TopLevelReportDashboardComponent', () => {
  let component: TopLevelReportDashboardComponent;
  let fixture: ComponentFixture<TopLevelReportDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopLevelReportDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopLevelReportDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
