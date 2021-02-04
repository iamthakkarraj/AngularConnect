import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './shared/components/default/default.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';

@NgModule({
  declarations: [    
    DefaultComponent, 
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    DefaultComponent
  ],
  providers: [],
  bootstrap: [DefaultComponent]
})
export class AppModule { }
