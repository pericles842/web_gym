import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HomeComponent } from "../../components/home/home.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {


}
