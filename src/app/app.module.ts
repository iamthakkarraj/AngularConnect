import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { DefaultComponent } from './components/default/default.component';
import { UserService } from './service/user/user.service';
import { WeatherForecastService } from './service/weather-forecast/weather-forecast.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [    
    
  DashboardComponent, DefaultComponent],
  imports: [    
    AppRoutingModule,
    BrowserModule,
    CommonModule
  ],
  exports: [  
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [
    UserService, 
    WeatherForecastService
  ],
  bootstrap: [DefaultComponent]
})
export class AppModule { }
