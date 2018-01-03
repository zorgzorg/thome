import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Router } from '@angular/router'; 

/**
 * Courses Component
 */
@Component({
  selector: 'add-edit-course',
  templateUrl: './add-edit-course.component.html'
 })

export class AddEditCourseComponent implements OnInit {
  idCourse: string;

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(res => {
      console.log(res.id);
      this.idCourse = res.id;
      }
    );
  }

  ngOnInit() {
    
  }

}
