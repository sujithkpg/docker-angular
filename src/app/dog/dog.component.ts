import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from '../animal-service.service';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
  // providers: [AnimalServiceService]
})
export class DogComponent implements OnInit {
  name:string='';
  constructor(private animalService: AnimalServiceService)
  {

  }

  ngOnInit(): void {
    this.animalService.setName("Dog:Batte");
    this.name = this.animalService.getName();
  }
  getName()
  {
    return this.animalService.getName();
  }
}
