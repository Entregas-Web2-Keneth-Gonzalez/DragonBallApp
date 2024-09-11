import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'characters',
        loadChildren: () => import ('./Paginas/characters/characters.module').then((m) => m.CharactersModule),
    },
    {
        path: 'character',
        loadChildren: () => import ('./Paginas/character/character.module').then((m) => m.CharacterModule),
    },
    {
      path: 'search/:id',
      loadChildren: () => import ('./Paginas/detail/detail.module').then((m) => m.DetailModule),
    },
    {
      path: 'planets',
      loadChildren: () => import ('./Paginas/planets/planets.module').then((m) => m.PlanetsModule),
    },
    {
      path: 'planet',
      loadChildren: () => import ('./Paginas/planet/planet.module').then ((m) => m.PlanetModule),
    }
];
