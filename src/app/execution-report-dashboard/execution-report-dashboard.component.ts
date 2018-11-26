import { Component, OnInit } from '@angular/core';
import { Report } from '../models/report';

@Component({
  selector: 'app-execution-report-dashboard',
  templateUrl: './execution-report-dashboard.component.html',
  styleUrls: ['./execution-report-dashboard.component.css']
})
export class ExecutionReportDashboardComponent implements OnInit {


  reports: Report[] =
   [ {
      id: '1',
      name: 'TCSB',
      type: 'Execution'},
      {
        id: '2',
        name: 'JTSB',
        type: 'Execution'},

        {
          id: '3',
          name: 'MTBJ',
          type: 'Execution'}];

  constructor() { }

  ngOnInit() {
  }

}
