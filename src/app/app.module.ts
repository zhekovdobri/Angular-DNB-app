import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 

import { AppComponent } from './app.component';
import { TodosComponent } from './component/todos/todos.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { ImagelogoComponent } from './component/imagelogo/imagelogo.component';
import { CarouselComponent } from './component/carousel/carousel.component';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CoursesComponent } from './component/courses/courses.component';
import { CarouselAboutComponent } from './component/carousel-about/carousel-about.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    ImagecomponentComponent,
    ImagelogoComponent,
    CarouselComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CoursesComponent,
    CarouselAboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'courses', component: CoursesComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
