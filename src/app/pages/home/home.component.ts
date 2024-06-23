import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../data/services/rick-and-morty.service';
import { NgFor, NgIf } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, InfiniteScrollDirective, NgIf, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  characters: any[] = [];
  params = {} as any;

  constructor(
    private RickAndMortySvc: RickAndMortyService
  ){

  }

  ngOnInit() {
    this.params.page = 0;
    this.getCharacters();
  }

  getCharacters(event?:any){
    this.params.page += 1;

    this.RickAndMortySvc.getCharacters(this.params).subscribe({

      next: (res: any) => {
        this.characters.push(...res.results)
        console.log(this.characters)

        if (event) event.target.complete()

      },
      error: (error: any) => {
        if (event) event.target.complete()
      }
    })
  }

  searchCharacters(){
    this.params.page += 1;

    this.RickAndMortySvc.getCharacters(this.params).subscribe({

      next: (res: any) => {
        this.characters = res.results

      },
      error: (error: any) => {
      }
    })
  }
  
}
