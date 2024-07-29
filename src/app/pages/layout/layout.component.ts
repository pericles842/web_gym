import { Component, HostListener, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { HomePresentationComponent } from "../../components/home-presentation/home-presentation.component";
import { AboutUsComponent } from "../../components/about-us/about-us.component";
import { CompanyServicesComponent } from "../../components/company-services/company-services.component";
import { CustomersReviewsComponent } from "../../components/customers-reviews/customers-reviews.component";
import { TeamComponent } from "../../components/team/team.component";
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { DetailServiceComponent } from "../../components/detail-service/detail-service.component";
import { LoadingComponent } from "../../components/loading/loading.component";
 

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent, HomePresentationComponent,
    AboutUsComponent, CompanyServicesComponent,
    CustomersReviewsComponent,
    TeamComponent, ContactComponent,
    FooterComponent,
    DetailServiceComponent,
    LoadingComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  /**
   *detecta el scroll de la pagina principal
   *
   * @memberof LayoutComponent
   */
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.toggleScrolled();
  }

  ngOnInit(): void {
    this.toggleScrolled();
   
  }

  /**
   *Desplazamiento para el hedaer
   *
   * @return {*} 
   * @memberof LayoutComponent
   */
  toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader?.classList.contains('scroll-up-sticky') &&
      !selectHeader?.classList.contains('sticky-top') &&
      !selectHeader?.classList.contains('fixed-top')) {
      return;
    }
    if (window.scrollY > 90) {
      selectBody?.classList.add('scrolled');
    } else {
      selectBody?.classList.remove('scrolled');
    }
  }
  
}
