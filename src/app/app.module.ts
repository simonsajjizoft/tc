import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AdhostDirective } from './adhost.directive';
import { MAT_TABS_CONFIG } from '@angular/material/tabs';
import { SharedModule } from './modules/shared/shared.module';
import { ConfirmBoxComponent } from './components/confirm-box/confirm-box.component';

@NgModule({
  declarations: [
    AppComponent,
 

  ],
  imports: [
    BrowserModule,
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    })
  ],
  providers: [  
      { provide: MAT_TABS_CONFIG, useValue: { animationDuration: '0ms' } }
    
   ],
  bootstrap: [AppComponent],
  exports: [BrowserModule]
})
export class AppModule { }

