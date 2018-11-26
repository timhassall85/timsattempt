import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TopLevelReportDashboardComponent } from './top-level-report-dashboard/top-level-report-dashboard.component';
import { PreConfirmationReportDashboardComponent } from './pre-confirmation-report-dashboard/pre-confirmation-report-dashboard.component';
import { ExecutionReportDashboardComponent } from './execution-report-dashboard/execution-report-dashboard.component';
import { AllReportsDashboardComponent } from './all-reports-dashboard/all-reports-dashboard.component';
import { ReportRequestComponent } from './report-request/report-request.component'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopLevelReportDashboardComponent,
    PreConfirmationReportDashboardComponent,
    ExecutionReportDashboardComponent,
    AllReportsDashboardComponent,
    ReportRequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [ {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
