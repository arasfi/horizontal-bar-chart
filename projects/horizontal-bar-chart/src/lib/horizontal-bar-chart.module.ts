import { NgModule } from '@angular/core';
import { HorizontalBarChartComponent } from './horizontal-bar-chart.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HorizontalBarChartComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HorizontalBarChartComponent
  ]
})
export class HorizontalBarChartModule { }
