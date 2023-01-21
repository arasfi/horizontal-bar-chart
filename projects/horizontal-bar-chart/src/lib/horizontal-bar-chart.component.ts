import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'HorizontalBarChart',
  template: `
  <div id="containerChart" [ngStyle]="{'margin-top': this.marginTop + 'px','margin-bottom': this.marginBottom + 'px'}">
  <div *ngIf="this.leftBarPercentage != 0 && this.rightBarPercentage != 0" class="char-container">
      <span class="row" [ngStyle]="{'width': this.leftBarPercentage + '%', background: this.leftBarBackgroundColor, 'display': this.leftBarPercentage == -1 ? 'none' : 'inline-block'}" #leftBar  id="left-bar">
          {{this.leftBarPecentageText}}
      </span>


      <span [ngStyle]="{'width': this.rightBarPercentage + '%', background: this.rightBarBackgroundColor, 'display': this.rightBarPercentage == -1 ? 'none' : 'inline-block'}" #rightBar id="right-bar">
          {{this.rightBarPecentageText}}

      </span>
  </div>
  <div class="row char-container">
      <div class="col-md-6 legendText">
              <span [ngStyle]="{ background: this.leftBarBackgroundColor }" class="leftSquare"></span>
              <span [ngStyle]="{   color: leftLegendColor}"> {{this.leftBarText}}</span>
      </div>
      <div class="col-md-6 legendText">
              <span  [ngStyle]="{ background: this.rightBarBackgroundColor }" class="rightSquare"></span>
              <span [ngStyle]="{  color: rightLegendColor}"> {{this.rightBarText}}</span>
      </div>
  </div>
</div>
  `,
  styleUrls: ['./horizontal-bar-chart.component.css']
})
export class HorizontalBarChartComponent implements OnInit {



  @Input() leftBarPercentage: number = 0;
  @Input() rightBarPercentage: number = 0;

  @Input()
  leftBarText: String = 'Loading...';
  @Input()
  rightBarText: String = 'Loading...';

  @Input()
  leftBarBackgroundColor!: String;
  @Input()
  rightBarBackgroundColor!: String;

  @Input()
  leftLegendColor: String = "black";
  @Input()
  rightLegendColor: String = "black";

  @Input() marginTop: number = 0;
  @Input() marginBottom: number = 0;

  @ViewChild('leftBar')
  leftBar!: ElementRef;
  @ViewChild('rightBar')
  rightBar!: ElementRef;
  @ViewChild('leftBarPercent')
  leftBarPercent!: ElementRef;
  @ViewChild('rightBarPercent')
  rightBarPercent!: ElementRef;

  public leftLegendWidth = 100
  public rightLegendWidth = 100


  public leftBarPecentageText = 'Loading...'
  public rightBarPecentageText = 'Loading...'

  constructor() { }

  ngOnInit(): void {
   
    if ((isNaN(this.leftBarPercentage) || this.leftBarPercentage == 0) && (isNaN(this.rightBarPercentage) || this.rightBarPercentage == 0)) {
      this.leftBarPecentageText = 'No data'
      this.rightBarPecentageText = 'No data'
      this.leftBarPercentage = 50;
      this.rightBarPercentage = 50;
    } else if ((isNaN(this.leftBarPercentage) || this.leftBarPercentage == 0) && (!isNaN(this.rightBarPercentage) && this.rightBarPercentage != 0)) {
      this.leftBarPecentageText = ''
      this.leftBarPercentage = -1
      this.rightBarPercentage = 100
      this.rightBarPecentageText = '100%'
    } else if ((!isNaN(this.leftBarPercentage) && this.leftBarPercentage != 0) && (isNaN(this.rightBarPercentage) || this.rightBarPercentage == 0)) {
      this.leftBarPecentageText = '100%'
      this.leftBarPercentage = 100
      this.rightBarPercentage = -1
      this.rightBarPecentageText = ''
    } else {
      this.leftBarPecentageText = this.leftBarPercentage.toString() + '%'
      this.rightBarPecentageText = this.rightBarPercentage.toString() + '%'
    }
  }

  ngOnChanges() {

    if ((isNaN(this.leftBarPercentage) || this.leftBarPercentage == 0) && (isNaN(this.rightBarPercentage) || this.rightBarPercentage == 0)) {
      this.leftBarPecentageText = 'No data'
      this.rightBarPecentageText = 'No data'
      this.leftBarPercentage = 50;
      this.rightBarPercentage = 50;
    } else if ((isNaN(this.leftBarPercentage) || this.leftBarPercentage == 0) && (!isNaN(this.rightBarPercentage) && this.rightBarPercentage != 0)) {
      this.leftBarPecentageText = ''
      this.leftBarPercentage = -1
      this.rightBarPercentage = 100
      this.rightBarPecentageText = '100%'
    } else if ((!isNaN(this.leftBarPercentage) && this.leftBarPercentage != 0) && (isNaN(this.rightBarPercentage) || this.rightBarPercentage == 0)) {
      this.leftBarPecentageText = '100%'
      this.leftBarPercentage = 100
      this.rightBarPercentage = -1
      this.rightBarPecentageText = ''
    } else {
      this.leftBarPecentageText = this.leftBarPercentage.toString() + '%'
      this.rightBarPecentageText = this.rightBarPercentage.toString() + '%'
    }
  }

}
