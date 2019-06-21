import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LessonsComponent } from './lessons/lessons.component';
import { ContactComponent } from './contact/contact.component';
import { InstrumentComponent } from './instrument/instrument.component';
import { ServicesComponent } from './services/services.component';




const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'lessons', component: LessonsComponent },
  { path: 'instruments', component: InstrumentComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
