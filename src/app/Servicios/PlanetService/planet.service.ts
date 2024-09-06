import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import Planets from '../../Modelos/Planets';

interface ApiResponse {
  items: Planets[];
}

@Injectable({
  providedIn: 'root'
})
export class PlanetService {

  constructor(private http: HttpClient) { }

  getPlanets(): Observable<Planets[]> {
    return this.http.get<ApiResponse>("https://dragonball-api.com/api/planets?limit=20").pipe(map(response => response.items)
  );
  }

  getOnePlanet(id:number): Observable<Planets> {
    return this.http.get<Planets>(`https://dragonball-api.com/api/planets/${id}`)
  }
}
