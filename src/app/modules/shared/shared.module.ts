import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDatePipe } from 'src/app/pipes/date-pipe.pipe';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MaterialModule } from '../material/material.module';
import { NgxBarcodeModule } from 'ngx-barcode';
import { RouterModule} from '@angular/router';
import { MentionModule } from 'angular-mentions';
import { HttpClient } from '@angular/common/http';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { UniquePipe } from 'src/app/pipes/unique.pipe';
import { NgxPrintModule } from 'ngx-print';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { TextfieldComponent } from 'src/app/components/textfield/textfield.component';
import { RadioComponent } from 'src/app/components/radio/radio.component';
import { DropdownComponent } from 'src/app/components/dropdown/dropdown.component';
import { BrowserModule } from '@angular/platform-browser';
import { LabelComponent } from 'src/app/components/label/label.component';
import { DateComponent } from 'src/app/components/date/date.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { PhoneComponent } from 'src/app/components/phone/phone.component';
import { AdhostDirective } from 'src/app/adhost.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { A11yModule } from '@angular/cdk/a11y';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayModule } from '@angular/cdk/overlay';
import { PlatformModule } from '@angular/cdk/platform';
import { PortalModule } from '@angular/cdk/portal';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    declarations: [
        CustomDatePipe,
        UniquePipe,
        TextfieldComponent,
        RadioComponent,
        DropdownComponent,
        LabelComponent,
        DateComponent,
        ButtonComponent,
        PhoneComponent,
        AdhostDirective,
   
    
     
    ],
    imports: [
        CommonModule,
        RouterModule,
        NgxSkeletonLoaderModule,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NgxMatSelectSearchModule,
        FormsModule,
        NgxBarcodeModule,
        MentionModule,
        IvyCarouselModule,
        NgxPrintModule,
        MatButtonModule, MatMenuModule,
        DragDropModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        A11yModule,
        BidiModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule,
        MatIconModule
        
        
    ],
    exports: [
        NgxSkeletonLoaderModule,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
        CustomDatePipe,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NgxMatSelectSearchModule,
        NgxBarcodeModule,
        MentionModule,
        NgxPrintModule,
        UniquePipe,
        MatButtonModule, MatMenuModule,
        TextfieldComponent,
        RadioComponent,
        DropdownComponent,
        LabelComponent,
        DateComponent,
        ButtonComponent,
        PhoneComponent,
        AdhostDirective,
        DragDropModule,
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        A11yModule,
        BidiModule,
        ObserversModule,
        OverlayModule,
        PlatformModule,
        PortalModule
    ]
})
export class SharedModule { }
