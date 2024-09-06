import { Component, inject } from '@angular/core';
import { CharacterService } from '../../../Servicios/CharacterService/character.service';
import Characters from '../../../Modelos/Characters';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DetalleComponent } from './detalle/detalle.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})
export class CharactersComponent {

  displayedColumns: string[] = ['id' , 'name', 'ki', 'race', 'gender', 'affiliation', 'detalle']

  characters: Characters[] = [];

  readonly dialog = inject(MatDialog)

  constructor (private charServ: CharacterService) {}

  ngOnInit(){
    this.cargarDatos();
  }

  cargarDatos(){
    this.charServ.getCharacters().subscribe((characters) => {
      this.characters = characters;
    })
  }

  openDialog(id:number){
    const dialogRef = this.dialog.open(DetalleComponent, {
      height: '80%',
      width: '80%',
      data: {id}
    });
  }

}
