import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './screens/registration/registration.component';
import { HomeComponent } from './screens/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { MainRoutingModule } from './main-routing.module';
import { LoginComponent } from './screens/login/login.component';
import { AboutusComponent } from './screens/aboutus/aboutus.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RegistrationComponent,
    HomeComponent, 
    HeaderComponent, 
    FooterComponent, 
    BannerComponent, 
    LoginComponent, 
    AboutusComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    MainRoutingModule
  ]  

})
export class MainModule { }
