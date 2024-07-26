import { Component } from '@angular/core';
import { GeneralCompanyServices } from '../../core/Interfaces';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-company-services',
  standalone: true,
  imports: [],
  templateUrl: './company-services.component.html',
  styleUrl: './company-services.component.css'
})
export class CompanyServicesComponent {

  services: GeneralCompanyServices[] = []

  constructor(private dataService: DataService) {
    this.services = this.dataService.services
  }
}
