import { Component } from '@angular/core';
import { ServiceHome } from '../../core/Interfaces';

@Component({
  selector: 'app-home-presentation',
  standalone: true,
  imports: [],
  templateUrl: './home-presentation.component.html',
  styleUrl: './home-presentation.component.css'
})
export class HomePresentationComponent {

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
    }

  ]

}
