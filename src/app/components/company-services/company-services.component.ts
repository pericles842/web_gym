import { Component } from '@angular/core';
import { GeneralCompanyServices } from '../../core/Interfaces';

@Component({
  selector: 'app-company-services',
  standalone: true,
  imports: [],
  templateUrl: './company-services.component.html',
  styleUrl: './company-services.component.css'
})
export class CompanyServicesComponent {

  services: GeneralCompanyServices[] = [
    {
      id: 1,
      label: "SERVICIO",
      icon: "bi bi-activity",
      description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      url: ''
    },
    {
      id: 1,
      label: "SERVICIO",
      icon: "bi bi-activity",
      description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      url: ''
    },
    {
      id: 1,
      label: "SERVICIO",
      icon: "bi bi-activity",
      description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      url: ''
    },
    {
      id: 1,
      label: "SERVICIO",
      icon: "bi bi-activity",
      description: "Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.",
      url: ''
    }
  ]
}
