import { Routes } from '@angular/router';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';

export const routes: Routes = [
    {path:'home',component:DogComponent},
    {path:'contact',component:CatComponent},
    { path: '**', redirectTo: '' } // Wildcard route for a 404 page
];
