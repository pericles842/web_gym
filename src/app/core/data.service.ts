import { Injectable } from '@angular/core';
import { GeneralCompanyServices, ServiceHome, TeamCompany } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  services_home: ServiceHome[] = [
    {
      icon: "bi bi-bullseye",
      label: "Servicio"
    },
    {
      icon: "bi bi-bullseye",
      label: "Servicio"
    },
    {
      icon: "bi bi-bullseye",
      label: "Servicio"
    },
    {
      icon: "bi bi-bullseye",
      label: "Servicio"
    },
    {
      icon: "bi bi-bullseye",
      label: "Servicio"
    }

  ]

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
  constructor() { }
}
