import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import Characters from '../../../../Modelos/Characters';
import { CharacterService } from '../../../../Servicios/CharacterService/character.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgFor, NgIf } from '@angular/common';
import { CharacterComponent } from '../../../character/character/character.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgIf, NgFor, RouterModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent {

  title = "Personaje";
  character!: Characters;

  constructor(private CharService: CharacterService,
    private dialogRef: MatDialogRef<DetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id: number, character: Characters},
  ) {}

  ngOnInit(){
    this.cargarPersonaje(this.data.id);
  }

  cargarPersonaje(id:number): void{
    this.CharService.getOneCharacter(id).subscribe((character) => {
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

  closeDialog(){
    this.dialogRef.close()
  }

}
