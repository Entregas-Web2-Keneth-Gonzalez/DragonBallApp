import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import Planets from '../../../../Modelos/Planets';
import { PlanetService } from '../../../../Servicios/PlanetService/planet.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-pl-detalle',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgIf],
  templateUrl: './pl-detalle.component.html',
  styleUrl: './pl-detalle.component.scss'
})
export class PlDetalleComponent {

  title = "Planeta";
  planet!: Planets;

  constructor(private planService: PlanetService,
    private dialogRef: MatDialogRef<PlDetalleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {id:number, planet: Planets},
  ) {}

  ngOnInit(){
    this.cargarPlaneta(this.data.id);
  }

  cargarPlaneta(id:number){
    this.planService.getOnePlanet(id).subscribe((planet) => {
      this.planet = planet;
    })
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
