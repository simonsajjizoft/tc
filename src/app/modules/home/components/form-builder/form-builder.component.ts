import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {
  CdkDragDrop,
  CdkDragExit,
  copyArrayItem,
  moveItemInArray,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { Component, VERSION ,OnInit, ViewChild, ElementRef} from '@angular/core';
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
    { title: 'Dropdown', price: 12, id: 3 ,img:"assets/icons/dropdown.png",type: "dropdown",label:"Question",selected:false,checked:false},
    { title: 'Multiple Choice', price: 12, id: 4 ,img:"assets/icons/radio.png",type: "radio",values: ["Option"],label:"Question",selected:false,checked:false},
    { title: 'Textarea', price: 12, id: 5 ,img:"assets/icons/textarea.png",type:'textarea',label:"Question",selected:false,checked:false},
    { title: 'Checkbox', price: 12, id: 5 ,img:"assets/icons/check.png",type:'checkbox',label:"Question",selected:false,checked:false},
  ];
  table: Array<IMenu> = [];
  selectedField;
  @ViewChild('tableList') tableList: ElementRef;

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
    this.sortItemsbasedIndex()
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
  }

  checkField(obj){
    this.table.map((item,idx)=>{
      if(obj?.id===item?.id) item.checked = !item?.checked;
    })
  }

  selectField(obj){
    this.table.map((item,idx)=>{
      if(obj?.id===item?.id){
        item.selected = obj.selected;
        this.selectedField = obj?.item;
      }
      else item.selected = false
    })
  }

  fieldChange(field){
    this.table.map((item,idx)=>{
      if(field?.id===item?.id){
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

  swap(element){
    console.log(this.selectedField);
    console.log(element)
    this.table.map((item,idx)=>{
      if(element?.id===item?.id){
        this.swapElements(this.table,this.selectedField?.id,element?.id)
      } 
    
    })

  }

  swapElements(array, index1, index2){
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp;  
    this.sortItemsbasedIndex()  
  };


  sortItemsbasedIndex(){
    this.table.map((item,idx)=>{
      item.id = idx;

    })
    console.log(this.table)
  }


}
