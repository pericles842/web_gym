import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


@Component({
  selector: 'app-customers-reviews',
  standalone: true,
  imports: [],
  templateUrl: './customers-reviews.component.html',
  styleUrl: './customers-reviews.component.css'
})
export class CustomersReviewsComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination,Autoplay],
      navigation: {

      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      loop: true,
      speed: 800,
      autoplay: {
        delay: 2500
      },
      slidesPerView: 'auto'

    });
  }
}
