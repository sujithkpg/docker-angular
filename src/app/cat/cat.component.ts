import { Component, OnInit } from '@angular/core';
import { AnimalServiceService } from '../animal-service.service';

@Component({
  selector: 'app-cat',
  standalone: true,
  imports: [],
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
  // providers: [AnimalServiceService]
})
export class CatComponent implements OnInit {

  name:string ='';
    constructor(private animalService: AnimalServiceService )
    {

    }

    ngOnInit(): void {
      this.animalService.setName("Cat:Tikiri");
      this.name = this.animalService.getName();
    }

}
