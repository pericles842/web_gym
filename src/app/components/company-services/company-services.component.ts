import { Component } from '@angular/core';
import { GeneralCompanyServices } from '../../core/Interfaces';
import { DataService } from '../../core/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-services',
  standalone: true,
  imports: [],
  templateUrl: './company-services.component.html',
  styleUrl: './company-services.component.css'
})
export class CompanyServicesComponent {

  services: GeneralCompanyServices[] = []

  constructor(
    private dataService: DataService,
    private router: Router
  ) {
    this.services = this.dataService.services
  }
  getDetailService(id: number) {
    this.router.navigate(['/service', id]);

  }
}
