import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable} from 'rxjs';
import Characters from '../../Modelos/Characters';

interface ApiResponse {
  items: Characters[];
}

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Characters[]> {
    return this.http.get<ApiResponse>("https://dragonball-api.com/api/characters?limit=60").pipe(map(response => response.items)
  );
  }

  getOneCharacter(id:number):Observable<Characters> {
    return this.http.get<Characters>(`https://dragonball-api.com/api/characters/${id}`)
  }
}
