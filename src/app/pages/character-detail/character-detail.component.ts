import { Component, OnInit, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RickAndMortyService } from '../../data/services/rick-and-morty.service';
import { NgIf, NgFor } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-character-detail',
  standalone: true,
  imports: [SharedModule, NgIf, NgFor, MatExpansionModule],
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss'
})
export class CharacterDetailComponent implements OnInit{
  
  characterId: string = '';
  character = null as any;
  episodes: any[] = [];

  readonly panelOpenState = signal(false);

  constructor(
    private actRoute: ActivatedRoute,
    private RickAndMortySvc: RickAndMortyService
  ){
    this.characterId = this.actRoute.snapshot.paramMap.get('id') as string
    console.log(this.characterId)
  }

  ngOnInit() {
    this.getCharacter()
  }


  
  getCharacter(){
    this.RickAndMortySvc.getCharacterById(this.characterId).subscribe({

      next: (res: any) => {
        console.log(res)
        this.character = res;
        this.getEpsiodes()
      },
      error: (error: any) => {
      }
    })
  }

  getEpsiodes(){
    for(let url of this.character.episode){
      this.RickAndMortySvc.getByUrl(url).subscribe({

        next: (res: any) => {
          console.log(res)
          this.episodes.push(res)

        },
        error: (error: any) => {
        }
      })
    }

    
  }

}
