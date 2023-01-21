import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'lib-HorizontalBarChart',
  template: `
  <div [ngStyle]="{'margin-top': this.marginTop + 'px','margin-bottom': this.marginBottom + 'px'}">
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
              <span [ngStyle]="{ background: this.leftBarBackgroundColor}" class="leftSquare"></span>
              <span> {{this.leftBarText}}</span>
      </div>
      <div class="col-md-6 legendText">
              <span  [ngStyle]="{ background: this.rightBarBackgroundColor}" class="rightSquare"></span>
              <span> {{this.rightBarText}}</span>
      </div>
  </div>
</div>
  `,
  styles: [`

span#left-bar
{
  height: 35px;
  text-align: center;
  color: white;
  display: inline-block;
  margin: 0px;
  padding: 0px;
  line-height: 30px;
}

span#right-bar{
  height: 35px;
  text-align: center;
  color: white;
  display: inline-block;
  margin: 0px;
  padding: 0px;
  line-height: 30px;
}

.char-container {
  width: 95 %;
  margin: auto;
}


#left-bar-value {
  visibility: hidden;
}

#right-bar-value {
  visibility: hidden;
}

#left-bar {
  background: #f19f13;
  position: relative;
  color: black!important;
}

#right-bar {
  background: #eb3f43;
  position: relative;
}

.line-left-bar {
  position: absolute;
  border: 1px solid #f19f13;
  width: 40px;
  top: 32px;
  margin: auto;
  left: 10px;
  transform: rotateY(0deg) rotate(45deg);
}


.line-right-bar {
  position: absolute;
  border: 1px solid #eb3f43;
  width: 30px;
  top: -10px;
  right: 10px;
  margin: auto;
  transform: rotateY(0deg) rotate(135deg);
}

.legend-left-bar {
  position: absolute;
  background: #f19f13;
  color: black;
  font-size: 0.8rem;
  top: -30px;
  /* left: 15px; */
  padding: 4px;
  margin: auto;
  text-align: center;
}

.legend-right-bar {
  font-size: 0.8rem;
  position: absolute;
  background: #eb3f43;
  color: black;
  top: 30px;
  /* right: 15px; */
  padding: 4px;
  margin: auto;
  text-align: center;
}

.barsContainer {
  margin-top: 50px;
}

.leftSquare {
  width: 20px;
  height: 20px;
  /* border: 1px solid #fff; */
  display: inline-block;
  background: #fda728;
  margin-top: 5px;
  vertical-align: bottom;
}

.rightSquare
{
  width: 20px;
  height: 20px;
  /* border: 1px solid #fff; */
  display: inline-block;
  background: #eb3f43;
  margin-top: 5px;
  vertical-align: bottom;
}

.legendText {
  color: white;
  font-size: 0.8rem;
}

/* keyframes for animation */
@keyframes run {
    to {
    background-size: 10000 % 5px
  }
}
@keyframes popup {
  60 % {
    transform: scale(0.1);
    opacity: 0;
  }
  100 % {
    transform: scale(1);
    opacity: 1;
  }
}
  /* call and delay animations */
  .leftSquare, .rightSquare, #right-bar, #left-bar {
  opacity: 0;
  animation:popup 1s forwards;
}
`
  ]
})
export class HorizontalBarChartComponent implements OnInit {



  @Input() leftBarPercentage: number = 0;
  @Input() rightBarPercentage: number = 0;

  @Input()
  leftBarText!: String;
  @Input()
  rightBarText!: String;

  @Input()
  leftBarBackgroundColor!: String;
  @Input()
  rightBarBackgroundColor!: String;

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


  public leftBarPecentageText = ''
  public rightBarPecentageText = ''

  constructor() { }

  ngOnInit(): void {
    this.leftBarPecentageText = 'Loading...'
    this.rightBarPecentageText = 'Loading...'
    this.leftBarText = 'Loading...'
    this.rightBarText = 'Loading...'
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
