import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() config;
  @HostBinding('style.width') public width: string ='100%';
  constructor() { }

  ngOnInit(): void {
    if(this.config?.col == 12) this.width = '100%';
    else if(this.config?.col == 6) this.width = '50%';
    else this.width = '25%'; 
  }

}
