import {Component} from '@angular/core';
import { CatComponent } from '../cat/cat.component';
import { DogComponent } from '../dog/dog.component';
import { Store } from '@ngrx/store';
import { BehaviorSubject } from 'rxjs';
import { increment, decrement, reset } from './actions';
import { selectCounter } from './selector';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CatComponent, DogComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  private countSubject = new BehaviorSubject<number>(0);
  count$ = this.countSubject.asObservable();

  increment() {
    this.countSubject.next(this.countSubject.value + 1);
  }

  decrement() {
    this.countSubject.next(this.countSubject.value - 1);
  }

  reset() {
    this.countSubject.next(0);
  }
}
