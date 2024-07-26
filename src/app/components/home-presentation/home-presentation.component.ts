import { Component } from '@angular/core';
import { DataService } from '../../core/data.service';
import { ServiceHome } from '../../core/Interfaces';

@Component({
  selector: 'app-home-presentation',
  standalone: true,
  imports: [],
  templateUrl: './home-presentation.component.html',
  styleUrl: './home-presentation.component.css'
})
export class HomePresentationComponent {

  services_home: ServiceHome[] = []
  
  constructor(private dataService: DataService) { 
    this.services_home = this.dataService.services_home
  }
}
