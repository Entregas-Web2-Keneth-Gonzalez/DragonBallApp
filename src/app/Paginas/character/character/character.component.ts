import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import Characters from '../../../Modelos/Characters';
import { CharacterService } from '../../../Servicios/CharacterService/character.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule, NgIf, NgFor],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {

  character: Characters | undefined;

  @ViewChild('message') messageInput!: ElementRef;

  constructor(private charServ: CharacterService) {}

  ngOnInit(){
    this.cargarPersonaje(1);
  }

  cargarPersonaje(id: number){
    this.charServ.getOneCharacter(id).subscribe((character) => {
      this.character = character;
    });
  }

  buscarPersonaje(event: Event){
    event.preventDefault();
    const id = Number (this.messageInput.nativeElement.value)
    if(id){
      this.cargarPersonaje(id);
    }
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

