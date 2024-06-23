import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../data/services/rick-and-morty.service';
import { NgFor, NgIf } from '@angular/common';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, InfiniteScrollDirective, NgIf],
  templateUrl: './episodes.component.html',
  styleUrl: './episodes.component.scss'
})
export class EpisodesComponent implements OnInit {
  episodes: any[] = [];
  params = {} as any;

  constructor(
    private RickAndMortySvc: RickAndMortyService
  ){

  }

  ngOnInit() {
    this.params.page = 0;
    this.getEpisodes();
  }

  getEpisodes(event?:any){
    this.params.page += 1;

    this.RickAndMortySvc.getEpisodes(this.params).subscribe({

      next: (res: any) => {
        this.episodes.push(...res.results)
        console.log(this.episodes)

        if (event) event.target.complete()

      },
      error: (error: any) => {
        if (event) event.target.complete()
      }
    })
  }

}
