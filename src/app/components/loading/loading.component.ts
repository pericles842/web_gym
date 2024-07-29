import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //al cargar la pagina removera el logaidn
    window.addEventListener('load', this.removePreloader);
  }

  /**
   *elimina la etiqueta de carga
   *
   * @memberof LoadingComponent
   */
  removePreloader(): void {
    console.log('sssss');
    
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      preloader.remove();
    }
  }
}
