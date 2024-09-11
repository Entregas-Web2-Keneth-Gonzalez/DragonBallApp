import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import Planets from '../../../Modelos/Planets';
import { PlanetService } from '../../../Servicios/PlanetService/planet.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-pl',
  standalone: true,
  imports: [MatCardModule, NgIf, NgFor],
  templateUrl: './detail-pl.component.html',
  styleUrl: './detail-pl.component.scss'
})
export class DetailPlComponent {

  planet: Planets | undefined;

  constructor(private planServ: PlanetService, private route: ActivatedRoute) {}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.cargarPlaneta(+id);
    }
  }

  cargarPlaneta(id: number){
    this.planServ.getOnePlanet(id).subscribe((planet) =>{
      this.planet = planet;
    });
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
