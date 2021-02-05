import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './shared/components/default/default.component';
import { WelcomeComponent } from './shared/components/welcome/welcome.component';
import { NgmodelComponent } from './shared/components/examples/ngmodel/ngmodel.component';
import { FormsModule } from '@angular/forms';
import { TagsService } from './shared/service/examples/tags.service';
import { HttpClientModule } from '@angular/common/http';
import { ExampleScreenComponent } from './shared/components/example-screen/example-screen.component';
import { TagsComponent } from './shared/components/examples/tags/tags.component';
import { PipesComponent } from './shared/components/examples/pipes/pipes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CeaserPipe } from './shared/utility/CaesarPipe';

@NgModule({
  declarations: [    
    DefaultComponent, 
    WelcomeComponent, 
    NgmodelComponent, 
    ExampleScreenComponent,
    TagsComponent,
    PipesComponent,
    CeaserPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  exports: [
    DefaultComponent
  ],
  providers: [TagsService],
  bootstrap: [DefaultComponent]
})
export class AppModule { }
