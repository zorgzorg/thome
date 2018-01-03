import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';

export const ROUTES: Routes = [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'courses',
        component: CoursesComponent
      },
      {
        path: 'courses/new',
        component: AddEditCourseComponent
      },
      {
        path: 'courses/:id',
        component: AddEditCourseComponent
      }              
];
