import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
// @ts-ignore
import { Label, SingleDataSet } from 'ng2-charts';
import {ShowordersserviceService} from "../showordersservice.service";
@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit{
  public pieChartLabels: Label[] = ["Red", "Green", "Yellow", "Grey", "Dark Grey"];
  public pieChartData: SingleDataSet = [300, 50, 100, 40, 120];
  public pieChartColors: any[] = [
    {
      backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
      hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
    }
  ];
  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  totalBalance : Number = 0
  usdBalance : Number = 0
    constructor(private showordersService : ShowordersserviceService) {
    }
  ngOnInit() {


  }
  showUSD() {
    this.showordersService.getUSDBalance().subscribe(x => {
      this.usdBalance = Number(x)
      console.log(x)

    })
  }
  showTotal() {
    this.showordersService.getTotalBalance().subscribe(x => {
      this.totalBalance = Number(x)
      console.log(x)
    })
  }
}
