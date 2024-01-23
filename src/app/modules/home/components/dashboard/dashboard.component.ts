import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data;
  options = {
    plugins: {
    legend: {
            display: false
    }
    },
    scales: {
            x: {
                    min: 0,
                    max: 8,
                    grid: {
                            display: false
                    },
            },
            y: {
                    display: false,
                    grid: {
                            display: false
                    },
            }
    },
    elements: {
            line: {
                    tension: 0.3
            }
    }
};

  constructor() { }

  ngOnInit(): void {
    this.initCharts()
  }

  
  initCharts(): void {
    const datesArray = ['Active','Published','Draft','Inactive'];
    const countsArray = [70,20,35,55];
    this.data = {
      labels: [...datesArray],
      datasets: [{
        label: '',
        data: [
          ...countsArray
        ],
        backgroundColor: [
          '#f5d0d9',
          '#eb217c',
          '#d9c3eb',
          'rgba(7, 19, 38, 0.4)',
    
        ],
        borderColor: [
          'rgb(7, 19, 38,0.01)',
          'rgb(7, 19, 38,0.01)',
          'rgb(7, 19, 38,0.01)',
          'rgb(7, 19, 38,0.01)',
     
        ],
        borderWidth: 6,
        borderRadius: 18,
        borderSkipped: false,
      },
      {
        type: 'line',
        label: '',
        data: [...countsArray],
        borderColor: [
          '#ffbadb',
          '#ffbadb',
          '#ffbadb',
        
        ],
        borderWidth: 2,
      }]
    };
    // const ctx = document.getElementById('myChart');
    new Chart('myChart', {
      type:'bar',
      options: this.options,
      data: this.data
    });
  }



}
