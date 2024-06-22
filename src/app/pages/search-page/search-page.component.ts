import { Component, inject } from '@angular/core';
import { ProfileCardComponent } from "../../common_ui/profile-card/profile-card.component";
import { Profile } from '../../data/Interfaces/profile.interface';
import { ProfileService } from '../../data/services/profile.service';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [ProfileCardComponent],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.scss'
})
export class SearchPageComponent {
  profileService = inject(ProfileService)
  profiles: Profile[] = []

  constructor(){
    this.profileService.getTestAccounts().subscribe(val => {
      this.profiles = val
    })
  }
}
