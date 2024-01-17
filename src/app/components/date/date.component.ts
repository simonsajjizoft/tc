import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  @Input() config;
  @Input() idx;
  @HostBinding('style.width') public width: string ='50%';
  constructor() { }

  ngOnInit(): void {
    if(this.config?.col == 12) this.width = '100%';
    else if(this.config?.col == 6) this.width = '50%';
    else this.width = '25%'; 
  }

}
