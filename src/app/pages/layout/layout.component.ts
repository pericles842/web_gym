import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HomePresentationComponent } from "../../components/home-presentation/home-presentation.component";
import { AboutUsComponent } from "../../components/about-us/about-us.component";
import { CompanyServicesComponent } from "../../components/company-services/company-services.component";
import { CustomersReviewsComponent } from "../../components/customers-reviews/customers-reviews.component";
import { TeamComponent } from "../../components/team/team.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent, HomePresentationComponent,
    AboutUsComponent, CompanyServicesComponent,
    CustomersReviewsComponent,
    TeamComponent, ContactComponent,
    FooterComponent,
],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
