import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import Planets from '../../../Modelos/Planets';
import { PlanetService } from '../../../Servicios/PlanetService/planet.service';

@Component({
  selector: 'app-planet',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, NgIf,NgFor],
  templateUrl: './planet.component.html',
  styleUrl: './planet.component.scss'
})
export class PlanetComponent {

  planet: Planets | undefined;

  @ViewChild('message') messageInput!: ElementRef;

  constructor(private planServ: PlanetService) {}

  ngOnInit(){
    this.cargarPlaneta(1);
  }

  cargarPlaneta(id: number){
    this.planServ.getOnePlanet(id).subscribe((planet) =>{
      this.planet = planet;
    });
  }

  buscarPlaneta(event: Event){
    event.preventDefault();
    const id = Number (this.messageInput.nativeElement.value)
    if(id){
      this.cargarPlaneta(id)
    }
  }

  getCharacters(){
    if(this.planet?.characters?.length){
      return this.planet.characters.map(t => ({
        id: t.id,
        name: t.name,
        maxKi: t.maxKi,
        race: t.race,
        image: t.image
      }));
    }else{
      return [];
    }
  }

}
