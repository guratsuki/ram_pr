import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { NavibarComponent } from './common-ui/navibar/navibar.component';

export const routes: Routes = [
    {path: '', component: NavibarComponent, children: [
        {path: '', component: HomeComponent},
        {path: 'character-detail/:id',component: CharacterDetailComponent }
    ]}
    
    
    
    
];
