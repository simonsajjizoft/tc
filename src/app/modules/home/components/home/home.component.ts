import { NgComponentOutlet, } from '@angular/common';
import { Component, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicService } from 'src/app/services/dynamic.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AdhostDirective } from 'src/app/adhost.directive';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';
import { TextfieldComponent } from 'src/app/components/textfield/textfield.component';
import { RadioComponent } from 'src/app/components/radio/radio.component';
import { DateComponent } from 'src/app/components/date/date.component';
import { PhoneComponent } from 'src/app/components/phone/phone.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { MatDrawerMode } from '@angular/material/sidenav';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
  // @ViewChild('container', { read: ViewContainerRef })
  @ViewChild(AdhostDirective, { static: true }) adHost!: AdhostDirective;
  // public target: ViewContainerRef;
  compList;
  elements = {
    dropdown: DropdownComponent,
    textbox: TextfieldComponent,
    radio: RadioComponent,
    date: DateComponent,
    phone: PhoneComponent,
    button: ButtonComponent
  }
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
      "col": 12,
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
  assigneeDropdown;
  events: string[] = [];
  opened: boolean = true;
  mode = new FormControl('side' as MatDrawerMode);


  constructor(public router:Router,public activatedRoute:ActivatedRoute) { 
    
  }

  ngOnInit() {
   this.router.navigate(['/packages']);
   console.log(this.router)
  }

  navigate(route){
    this.router.navigate([route])
  }

}
