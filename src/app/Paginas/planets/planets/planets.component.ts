import { Component, inject } from '@angular/core';
import { PlanetService } from '../../../Servicios/PlanetService/planet.service';
import { MatTableModule } from '@angular/material/table';
import Planets from '../../../Modelos/Planets';
import { MatDialog } from '@angular/material/dialog';
import { PlDetalleComponent } from './pl-detalle/pl-detalle.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-planets',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss'
})
export class PlanetsComponent {

  displayedColumns: string[] = ['id', 'name', 'detalle']

  planets: Planets[] = [];

  readonly dialog = inject(MatDialog)

  constructor(private planServ: PlanetService) {}

  ngOnInit(){
    this.cargarDatos();
  }

  cargarDatos(){
    this.planServ.getPlanets().subscribe((planets) =>{
      this.planets = planets;
    });
  }

  openDialog(id: number){
    const dialogRef = this.dialog.open(PlDetalleComponent, {
      height:'80%',
      width: '80%',
      data: {id}
    });
  }

}
