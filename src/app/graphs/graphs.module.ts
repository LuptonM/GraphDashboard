import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {GraphComponent } from './components/graph/graph.component';
import {provideHttpClient } from '@angular/common/http';
import { AccordionModule } from 'primeng/accordion';

@NgModule({
  declarations: [DashboardComponent, GraphComponent],
  imports: [
    CommonModule,
    AccordionModule
    
  ],
  providers: [provideHttpClient()],
  exports: [DashboardComponent]
})
export class GraphsModule { }
