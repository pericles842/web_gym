import { Component } from '@angular/core';
import { DataService } from '../../core/data.service';
import { TeamCompany } from '../../core/Interfaces';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  teams: TeamCompany[] = []

  constructor(private dataService: DataService) {
    this.teams = this.dataService.teams
  }
}
