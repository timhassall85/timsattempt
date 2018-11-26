import { Component, OnInit } from '@angular/core';
import { Report } from '../models/report';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-report-request',
  templateUrl: './report-request.component.html',
  styleUrls: ['./report-request.component.css']
})
export class ReportRequestComponent implements OnInit {

  report: Report;

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

  constructor(  private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getReport();
  }

  getReport(): void {
    this.report = this.reports[1];
  }

  goBack(): void {
    this.location.back();
  }

}
