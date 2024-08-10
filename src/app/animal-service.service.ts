import { Injectable } from '@angular/core';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';

@Injectable()
export class AnimalServiceService {
  private name: string = '';

  constructor() { }

  setName(name: string): void {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }
}
