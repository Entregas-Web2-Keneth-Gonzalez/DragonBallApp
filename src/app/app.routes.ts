import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'characters',
        loadChildren: () => import ('./Paginas/characters/characters.module').then((m) => m.CharactersModule),
    },
    {
        path: 'character',
        loadChildren: () => import ('./Paginas/character/character.module').then((m) => m.CharacterModule), 
    }
];
