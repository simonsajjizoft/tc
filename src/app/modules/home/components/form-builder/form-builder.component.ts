import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {
  CdkDragDrop,
  CdkDragExit,
  copyArrayItem,
  moveItemInArray,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { Component, VERSION ,OnInit} from '@angular/core';
import { randomInt } from 'crypto';

type IMenu = {
  title: string;
  id: number;
  price: number;
  temp?: boolean;
  img?:string;
  type?:string
  placeholder?:string,
  values?:any,
  label?:any,
  selected?:boolean,
  checked?:boolean
};

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
    
  name = 'Angular ' + VERSION.major;
  menu: Array<IMenu> = [
    // { title: 'Label', price: 12, id: 5 ,img:"assets/icons/label.png",type:'label',label:"Question"},
    { title: 'Text', price: 12, id: 1 ,img:"assets/icons/text.png", type: "textbox",placeholder: "Please Enter Placeholder",label:"Question",selected:false,checked:false},
    { title: 'DropDown', price: 12, id: 3 ,img:"assets/icons/dropdown.png",type: "dropdown",label:"Question",selected:false,checked:false},
    { title: 'Multiple Choice', price: 12, id: 4 ,img:"assets/icons/radio.png",type: "radio",values: ["Option"],label:"Question",selected:false,checked:false},
    { title: 'Text Area', price: 12, id: 5 ,img:"assets/icons/textarea.png",type:'textarea',label:"Question",selected:false,checked:false},
    { title: 'Check box', price: 12, id: 5 ,img:"assets/icons/check.png",type:'checkbox',label:"Question",selected:false,checked:false},
  ];
  table: Array<IMenu> = [];
  selectedField;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {}

  drop(event: any) {
    if (event.previousContainer !== event.container) {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    if (event.previousContainer.data) {
      this.menu = this.menu.filter((f) => !f.temp);
    }
  }

  exited(event: any) {
    const currentIdx = event.container.data.findIndex(
      (f) => f.id === event.item.data.id
    );
    this.menu.splice(currentIdx + 1, 0, {
      ...event.item.data,
      temp: true,
    });
  }

  entered() {
    this.menu = this.menu.filter((f) => !f.temp);
  }

  addItemToList(item){
    let tempArray = JSON.parse(JSON.stringify(item));
    tempArray.id = this.table.length;
    this.table.push(tempArray);
    console.log(this.table)
  }

  checkField(obj){
    this.table.map((item,idx)=>{
      if(obj?.id===idx) item.checked = !item?.checked;
    })
  }

  selectField(obj){
    this.table.map((item,idx)=>{
      if(obj?.id===idx) item.selected = true;
      else item.selected = false
    })
    console.log(this.table)
  }

  fieldChange(field){
    console.log(field)
    this.table.map((item,idx)=>{
      if(field?.id===idx){
        item =  field;
      }
    })
  }

  getCheckedItemsCount(){
    let cnt = 0;
    this.table.forEach((item)=>{
      if(item?.checked ) cnt++;
    })
    return cnt | 0;
  }



}
