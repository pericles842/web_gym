import { Component } from '@angular/core';
import { TeamCompany } from '../../core/Interfaces';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  teams: TeamCompany[] = [
    {
      img: "team-1.jpg",
      name: "Louis Sarmiento",
      charge: "Desarrollador"
    },
    {
      img: "team-1.jpg",
      name: "Louis Sarmiento",
      charge: "Desarrollador"
    }, {
      img: "team-1.jpg",
      name: "Louis Sarmiento",
      charge: "Desarrollador"
    }, {
      img: "team-1.jpg",
      name: "Louis Sarmiento",
      charge: "Desarrollador"
    }, {
      img: "team-1.jpg",
      name: "Louis Sarmiento",
      charge: "Desarrollador"
    }
  ]
}
