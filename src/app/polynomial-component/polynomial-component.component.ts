import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-polynomial-component',
  templateUrl: './polynomial-component.component.html',
  styleUrls: ['./polynomial-component.component.css']
})
export class PolynomialComponentComponent implements OnInit {

  learning_rate = 0.1;
  end_learning_rate = 0.0001;
  po_wer = 3.0;
  decay_steps = 1000.0;
  max_steps = 2000;
  zoom = 10;

  // lineChart
  public lineChartData: Array<any> = [
    {data: [], label: 'Polinomial Decay'}
  ];

  public lineChartLabels: Array<any>;
  public lineChartOptions: any = {
    responsive: true
  };

  constructor() {
  }

  formSubmitted() {
    console.log(this.zoom);
    this.initChart();
  }

  ngOnInit() {
    this.initChart();
  }

  initChart() {
    this.lineChartLabels = new Array(this.max_steps / this.zoom);

    let currentLr = this.learning_rate;

    this.lineChartData[0] = {data: new Array(this.max_steps / this.zoom), label: this.lineChartData[0].label};
    this.lineChartData[0].data[0] = this.learning_rate;
    let x = 1;
    for (let j = 1; j < this.max_steps; j++) {
      let decayed_lr = this.getPolinomialDecay(this.decay_steps, j, currentLr);
      if (j % this.zoom == 0) {
        this.lineChartData[0].data[x] = decayed_lr;
        this.lineChartLabels[x] = j;
        x++;
      }
      currentLr = decayed_lr;
    }
  }

  private getPolinomialDecay(decay_steps: number, global_step: number, current_lr): number {
    let g_step = Math.min(decay_steps, global_step);

    let a = (current_lr - this.end_learning_rate);
    let b = (1 - (g_step / decay_steps));
    let pow = Math.pow(b, this.po_wer);
    let x = a * pow;
    let decayed_learning_rate = x + this.end_learning_rate;
    return decayed_learning_rate
  }

  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

}
