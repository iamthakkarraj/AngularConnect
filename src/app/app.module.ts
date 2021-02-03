import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './shared/components/default/default.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [    
    DefaultComponent, 
    WelcomeComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
    DefaultComponent
  ],
  providers: [],
  bootstrap: [WelcomeComponent]
})
export class AppModule { }
