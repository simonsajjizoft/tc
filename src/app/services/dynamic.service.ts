import { TextFieldModule } from '@angular/cdk/text-field';
import { Injectable, Type } from '@angular/core';
import { TextfieldComponent } from '../components/textfield/textfield.component';
import { RadioComponent } from '../components/radio/radio.component';
import { DropdownComponent } from '../components/dropdown/dropdown.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicService {

  elements = {
    text : TextfieldComponent,
    radio : RadioComponent,
    dropdown : DropdownComponent
  }

  constructor() { }
  getDynamicComponents() {

  }
}
