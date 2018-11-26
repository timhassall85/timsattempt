import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllReportsDashboardComponent } from './all-reports-dashboard.component';

describe('AllReportsDashboardComponent', () => {
  let component: AllReportsDashboardComponent;
  let fixture: ComponentFixture<AllReportsDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllReportsDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllReportsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
