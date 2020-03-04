import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenubarComponent } from './menubar/menubar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { AnuncioComponent } from './anuncio/anuncio.component';
import { DonacionesComponent } from './donaciones/donaciones.component';
import { SliderModule } from 'angular-image-slider';
import { SliderComponent } from './slider/slider.component';
import {MatSelectModule} from '@angular/material/select';

const routes:Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'donaciones', component: DonacionesComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenubarComponent,
    HomeComponent,
    AnuncioComponent,
    DonacionesComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    SliderModule,
    MatSelectModule,
    NgbModule,
    BrowserAnimationsModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HomeComponent,SliderComponent, LoginComponent,{provide: APP_BASE_HREF, useValue : '/' }, DonacionesComponent],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
