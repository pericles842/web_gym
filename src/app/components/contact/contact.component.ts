import { Component } from '@angular/core';
import { DataService } from '../../core/data.service';
import { Contact } from '../../core/Interfaces';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact!: Contact

  constructor(
    private dataService: DataService
  ) { 
    this.contact = this.dataService.contact
  }
}
