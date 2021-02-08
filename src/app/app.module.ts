import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './modules/shared/components/default/default.component';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
  declarations: [    
    
  ],
  imports: [    
    AppRoutingModule,
    SharedModule.forRoot(),
    BrowserModule,
    CommonModule
  ],
  exports: [  
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [DefaultComponent]
})
export class AppModule { }
