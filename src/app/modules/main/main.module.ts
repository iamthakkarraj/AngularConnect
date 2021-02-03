import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './screens/registration/registration.component';
import { HomeComponent } from './screens/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    BannerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule { }
