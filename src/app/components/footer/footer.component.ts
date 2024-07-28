import { Component } from '@angular/core';
import { Contact } from '../../core/Interfaces';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  contact!: Contact

  constructor(
    private dataService: DataService
  ) {
    this.contact = this.dataService.contact
  }

}
