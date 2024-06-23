import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-navibar',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './navibar.component.html',
  styleUrl: './navibar.component.scss'
})
export class NavibarComponent {

}
