import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router'; 
import { User } from '../user.ts';

/**
 * Login Component
 */
@Component({
  selector: 'login',
  templateUrl: './login.component.html'
 })

export class LoginComponent implements OnInit {
  message: string;
  values: string;
  heroes=['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  user = new User();

  constructor(private router: Router) {}

  public ngOnInit() {
  }

  onClickMe(){
    this.message = "Good job!";
  }

  giveMeCourse(){
    this.router.navigate(['courses']);
  }

  onSubmit(){
    this.router.navigate(['courses']);
  }

  onKeyUp(value: string){
    this.values = value;
  }

  addHero(newHero: string){
    if(newHero){
      this.heroes.push(newHero);
    }
  }

   // TODO: Remove this when we're done
   get diagnostic() { return JSON.stringify(this.user); }

}