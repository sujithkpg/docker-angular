import {Component} from '@angular/core';
import { CatComponent } from '../cat/cat.component';
import { DogComponent } from '../dog/dog.component';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { increment, decrement, reset } from './actions';
import { selectCounter } from './selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CatComponent, DogComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  constructor(private router:Router)
  {

  }
  
  navigateToHome()
  {
    this.router.navigate(['home']);
  }
}
