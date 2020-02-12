import { Component } from '@angular/core';
import {HomeComponent} from './home/home.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path:'home', component: HomeComponent}
];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyDiscapacidad';
}
