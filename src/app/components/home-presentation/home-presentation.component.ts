import { Component } from '@angular/core';
import { DataService } from '../../core/data.service';
import { GeneralCompanyServices } from '../../core/Interfaces';

@Component({
  selector: 'app-home-presentation',
  standalone: true,
  imports: [],
  templateUrl: './home-presentation.component.html',
  styleUrl: './home-presentation.component.css'
})
export class HomePresentationComponent {

  services_home: GeneralCompanyServices[] = []

  constructor(private dataService: DataService) {
    this.services_home = this.dataService.services
  }

  get services() {
    return this.services_home.slice(0, 5);
  }
}
