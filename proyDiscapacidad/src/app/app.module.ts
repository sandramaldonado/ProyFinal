import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenubarComponent } from './menubar/menubar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenubarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HomeComponent, LoginComponent,{provide: APP_BASE_HREF, useValue : '/' }],
  bootstrap: [AppComponent],
  exports:[RouterModule]
})
export class AppModule { }
