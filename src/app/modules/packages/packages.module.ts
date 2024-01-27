import { NgModule } from '@angular/core';
import { CommonModule, NgComponentOutlet } from '@angular/common';

import { PackagesRoutingModule } from './packages-routing.module';
import { ListingComponent } from './components/listing/listing.component';
import { CreatePackageComponent } from './components/create-package/create-package.component';
import { DetailsComponent } from './components/details/details.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ClipboardModule } from '@angular/cdk/clipboard';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    ListingComponent,
    CreatePackageComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PackagesRoutingModule,
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    ClipboardModule,
    NgComponentOutlet,
    MatIconModule
  ]
})
export class PackagesModule { }
