import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {TopLevelReportDashboardComponent} from './top-level-report-dashboard/top-level-report-dashboard.component';
import { PreConfirmationReportDashboardComponent } from './pre-confirmation-report-dashboard/pre-confirmation-report-dashboard.component';
import { ExecutionReportDashboardComponent } from './execution-report-dashboard/execution-report-dashboard.component';
import { AllReportsDashboardComponent } from './all-reports-dashboard/all-reports-dashboard.component';
import { ReportRequestComponent } from './report-request/report-request.component';


 
const routes: Routes = [
  { path: '', redirectTo: '/reportTypes', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'reportTypes', component: TopLevelReportDashboardComponent },
  { path: 'reportTypes/Pre-Confirmation', component: PreConfirmationReportDashboardComponent },
  { path: 'reportTypes/Execution', component: ExecutionReportDashboardComponent },
  { path: 'reportTypes/All', component: AllReportsDashboardComponent },
  { path: 'reportTypes/Pre-Confirmation/:id', component: ReportRequestComponent },
  { path: 'reportTypes/Execution/:id', component: ReportRequestComponent },
  { path: 'reportTypes/All/:id', component: ReportRequestComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}