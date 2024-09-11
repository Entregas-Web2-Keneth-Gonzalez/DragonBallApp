import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import Characters from '../../../Modelos/Characters';
import { CharacterService } from '../../../Servicios/CharacterService/character.service';
import { NgFor, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MatCardModule, NgIf, NgFor],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {

  character: Characters | undefined

  constructor(private charServ: CharacterService, private route: ActivatedRoute) {}

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.cargarPersonaje(+id);
    }
  }

  cargarPersonaje(id:number){
    this.charServ.getOneCharacter(id).subscribe((character) => {
      this.character = character;
    });
  }

  getTransformations(){
    if (this.character?.transformations?.length){
      return this.character.transformations.map(t => ({
        id: t.id,
        image: t.image,
        ki: t.ki,
        name: t.name
      }));
    }else{
      return [];
    }
  }

}
