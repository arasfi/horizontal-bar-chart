## Installation
To install this package, run the following command in your terminal:
        
        npm install horizontal-bar-chart

## Usage
Import the HorizontalBarChartModule in your module:

        import { HorizontalBarChartModule } from 'horizontal-bar-chart';
        //...
        @NgModule({
        imports: [
            HorizontalBarChartModule,
            // ...
        ],
        // ...
        })
        export class AppModule { }

Then, you can use the HorizontalBarChart component in your template:

        <HorizontalBarChart
            [leftBarPercentage]="70"
            [rightBarPercentage]="30"
            [leftLegendColor]="'black'"
            [rightLegendColor]="'black'"
            [leftBarText]="'Left Bar'"
            [rightBarText]="'Right Bar'"
            [leftBarBackgroundColor]="'#f19f13'"
            [rightBarBackgroundColor]="'#eb3f43'"
            [marginTop]="50"
            [marginBottom]="50">
        </HorizontalBarChart>


## Inputs
        leftBarPercentage (number): The percentage value of the left bar.
        rightBarPercentage (number): The percentage value of the right bar.
        leftBarText (string): The text to display on the left legend.
        rightBarText (string): The text to display on the right legend.
        leftBarBackgroundColor (string): The background color of the left bar.
        rightBarBackgroundColor (string): The background color of the right bar.
        marginTop (number): The margin top value of the chart container.
        marginBottom (number): The margin bottom value of the chart container.
        leftLegendColor (string) = The text color on the left legend;
        rightLegendColor (string) = The text color on the right legend;

## License
This package is under the MIT license.