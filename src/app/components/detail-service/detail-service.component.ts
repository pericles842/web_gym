import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { GeneralCompanyServices } from '../../core/Interfaces';
import { DataService } from '../../core/data.service';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { LoadingComponent } from "../loading/loading.component";

@Component({
  selector: 'app-detail-service',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, LoadingComponent],
  templateUrl: './detail-service.component.html',
  styleUrl: './detail-service.component.css'
})
export class DetailServiceComponent {

  service!: GeneralCompanyServices
  services: GeneralCompanyServices[] = []

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    const service_id = this.route.snapshot.paramMap.get('id');
    this.services = this.dataService.services
    this.service = this.dataService.getServiceDetail(parseInt(service_id as string))
    window.scrollTo(0, 0);

  }
  /**
   *obtiene un servicio
   *
   * @param {(number|string)} service_id
   * @memberof DetailServiceComponent
   */
  getService(service_id: number | string) {
    this.service = this.dataService.getServiceDetail(parseInt(service_id as string))
  }
}
