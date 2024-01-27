import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { HomeComponent } from './components/home/home.component';
import { ContentAreaComponent } from './components/content-area/content-area.component';
import { NgComponentOutlet } from '@angular/common';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';
import { EditDialogComponent } from './components/form-builder/edit-dialog/edit-dialog.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PackagesComponent } from './components/packages/packages.component';
const routes: Routes = [
  // { path: '', component: HomeComponent,
  // children: [
  //   { path: 'dashboard', component: DashboardComponent, },
  //   { path: 'packages', component: PackagesComponent },
  // ]},
  { path: 'dashboard', component: DashboardComponent, },
  {
    path: 'content', component: ContentAreaComponent,
  },
]

@NgModule({
  declarations: [
    HomeComponent,
    ContentAreaComponent,
    FormBuilderComponent,
    EditDialogComponent,
    DashboardComponent,
    PackagesComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    DragDropModule,
    ClipboardModule,
    NgComponentOutlet,
  ],
  exports: [CommonModule],
})
export class HomeModule { }
