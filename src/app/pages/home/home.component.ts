import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../data/services/rick-and-morty.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgFor, 
    NgIf, 
    RouterLink, 
    InfiniteScrollDirective,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  selectedValue: string = '';
  characters: any[] = [];
  params = {} as any;

  
  statuses: any[] = [
    {value: '', viewValue: 'All'},
    {value: 'alive', viewValue: 'Alive'},
    {value: 'dead', viewValue: 'Dead'},
    {value: 'unknown', viewValue: 'Unknown'},
  ];

  genders: any[] = [
    {value: '', viewValue: 'All'},
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'unknown', viewValue: 'Unknown'},
  ];

  filters: any[] = [
    {value: 'name', viewValue: 'Name'},
    {value: 'location', viewValue: 'Location'},
  ]

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

      },
      error: (error: any) => {
        console.log("That's all")
      }
    })
  }

  searchCharacters(){
    this.params.page = 1

    this.RickAndMortySvc.getCharacters(this.params).subscribe({

      next: (res: any) => {
        console.log(res.results)
        this.characters = res.results
        

      },
      error: (error: any) => {
      }
    })
  }

  filterCharacters(){
    this.params.page = 1

    this.RickAndMortySvc.getCharacters(this.params).subscribe({

      next: (res: any) => {
        console.log(res.results)
        this.characters = res.results
        

      },
      error: (error: any) => {
      }
    })
  }
  
}
