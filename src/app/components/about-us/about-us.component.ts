import { Component, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const swiper = new Swiper('.swiper1', {
      modules: [Navigation, Pagination, Autoplay],
      navigation: {

      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      loop: true,
      speed: 600,
      autoplay: {
        delay: 1500
      },
      slidesPerView: 'auto',
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 40
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 60
        },
        640: {
          slidesPerView: 4,
          spaceBetween: 80
        },
        992: {
          slidesPerView: 6,
          spaceBetween: 120
        }
      }
    });
  }

}

