import { NgComponentOutlet, } from '@angular/common';
import { Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicService } from 'src/app/services/dynamic.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  public target: ViewContainerRef;
  compList;
  injector: Injector;
  pageConfig = [

    {
      "index": 1,
      "type": "textbox",
      "placeholder": "Name",
      "label": "Name",
      "mandatory": true,
      "col": 6,
      "row": 1,
    },

    {
      "index": 2,
      "type": "textbox",
      "placeholder": "Email",
      "label": "Email",
      "col": 6,
      "row": 1,
    },
    {
      "index": 3,
      "type": "dropdown",
      "label": "Modules",
      "values": ["Leave", "Timesheet"],
      "edit": true,
      "mandatory": true,
      "col": 6,
      "row": 2,
    },
    {
      "index": 4,
      "type": "radio",
      "label": "Gender",
      "values": ["male", "female"],
      "edit": true,
      "mandatory": true,
      "col": 12,
      "row": 1,
    },
    {
      "index": 5,
      "type": "dropdown",
      "label": "Role",
      "values": ["manager", "lead"],
      "edit": true,
      "mandatory": true,
      "col": 6,
      "row": 1,
    },
    {
      "index": 5,
      "type": "phone",
      "label": "Phone Number",
      "country": ["US", "IND", "CA"],
      "edit": true,
      "mandatory": true,
      "col": 6,
      "row": 1,
    },
    {
      "index": 6,
      "type": "date",
      "label": "Date of Birth",
      "edit": true,
      "mandatory": true,
      "col": 6,
      "row": 1,
    },
    {
      "index": 6,
      "type": "button",
      "value": "Submit",
      "mandatory": true,
      "col": 12,
      "row": 1,
    }
  ];

  elements = {
    dropdown: `<app-dropdown  [config]="config"></app-dropdown>`,
    textfield: `<app-textfield  [config]="config"></app-textfield>`,
    radio: `<app-radio  [config]="config"></app-radio>`,
    date: `<app-date [config]="config"></app-date>`,
    phone: `<app-phone [config]="config"></app-phone>`,
    button: `<app-button [config]="config"></app-button>`
  }
  constructor(private dynamic: DynamicService) { }

  ngOnInit() {
  }

  callComponents(config){
    return this.elements[config?.type]
  }

}
