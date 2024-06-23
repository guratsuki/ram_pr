import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EpisodesComponent } from './pages/episodes/episodes.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { NavibarComponent } from './common-ui/navibar/navibar.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'episodes', component: EpisodesComponent},
    {path: 'character-detail/:id',component: CharacterDetailComponent }
    
    
    
];
