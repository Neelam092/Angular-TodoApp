import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './myComponent/about/about.component';
import {ContactComponent} from './myComponent/contact/contact.component';
import { NgModule } from '@angular/core';
import { TodosComponent } from './myComponent/todos/todos.component';

const routes: Routes = [
  { path: '', component:TodosComponent },
  { path: 'about', component: AboutComponent},
  { path: 'contact',component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
