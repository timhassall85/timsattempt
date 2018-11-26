import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-level-report-dashboard',
  templateUrl: './top-level-report-dashboard.component.html',
  styleUrls: ['./top-level-report-dashboard.component.css']
})
export class TopLevelReportDashboardComponent implements OnInit {

  reportTypes: String[] = ["Pre-Confirmation", "Execution", "All"]
  constructor() { }

  ngOnInit() {
  }

}
