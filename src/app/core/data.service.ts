import { Injectable } from '@angular/core';
import { Contact, GeneralCompanyServices, TeamCompany } from './Interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  services: GeneralCompanyServices[] = [
    {
      id: 1,
      label: 'Asesoría Fiscal',
      icon: 'bi bi-people-fill',
      description: 'Ofrecemos asesoría fiscal para personas y empresas, optimizando sus obligaciones tributarias.',
      url: 'https://example.com/asesoria-fiscal',
      detailed_description: `Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et 
      doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga 
      doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.`
    },
    {
      id: 2,
      label: 'Contabilidad General',
      icon: 'bi bi-archive-fill',
      description: 'Servicios de contabilidad general para mantener sus libros en orden y cumplir con las normativas legales.',
      url: 'https://example.com/contabilidad-general',
      detailed_description: `Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et 
      doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga 
      doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.`
    },
    {
      id: 3,
      label: 'Gestión de Nóminas',
      icon: 'bi bi-kanban-fill',
      description: 'Gestión integral de nóminas, incluyendo el cálculo de sueldos, impuestos y beneficios para empleados.',
      url: 'https://example.com/gestion-nominas',
      detailed_description: `Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et 
      doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga 
      doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.`
    },
    {
      id: 4,
      label: 'Auditorías Financieras',
      icon: 'bi bi-body-text',
      description: 'Realizamos auditorías financieras exhaustivas para garantizar la precisión y transparencia de sus estados financieros.',
      url: 'https://example.com/auditorias-financieras',
      detailed_description: `Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et 
      doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga 
      doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.`
    },
    {
      id: 5,
      label: 'Planificación Financiera',
      icon: 'bi bi-collection-fill',
      description: 'Servicios de planificación financiera para ayudarle a alcanzar sus objetivos económicos a corto y largo plazo.',
      url: 'https://example.com/planificacion-financiera',
      detailed_description: `Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et 
      doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga 
      doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.`
    },
    {
      id: 6,
      label: 'Consultoría Contable',
      icon: 'bi bi-person-check',
      description: 'Consultoría contable personalizada para resolver problemas específicos y mejorar la eficiencia de su contabilidad.',
      url: 'https://example.com/consultoria-contable',
      detailed_description: `Blanditiis voluptate odit ex error ea sed officiis deserunt. Cupiditate non consequatur et 
      doloremque consequuntur. Accusantium labore reprehenderit error temporibus saepe perferendis fuga 
      doloribus vero. Qui omnis quo sit. Dolorem architecto eum et quos deleniti officia qui.`
    }
  ];

  teams: TeamCompany[] = [
    {
      img: "team-1.jpg",
      name: "Louis Sarmiento",
      charge: "Desarrollador"
    },
    {
      img: "team-1.jpg",
      name: "Louis Sarmiento",
      charge: "Desarrollador"
    }, {
      img: "team-1.jpg",
      name: "Louis Sarmiento",
      charge: "Desarrollador"
    }, {
      img: "team-1.jpg",
      name: "Louis Sarmiento",
      charge: "Desarrollador"
    }, {
      img: "team-1.jpg",
      name: "Louis Sarmiento",
      charge: "Desarrollador"
    }
  ]

  contact: Contact = {
    direction:'A108 Adam Street, New York, NY 535022',
    number:'+1 5589 55488 55',
    email:'infoexample.com'
  }
  constructor() { }
  /**
   *Obtiene un servicio
   *
   * @param {number} id
   * @return {*}  {GeneralCompanyServices}
   * @memberof DataService
   */
  getServiceDetail(id: number): GeneralCompanyServices {
    return this.services.find(s => s.id == id) as GeneralCompanyServices
  }
}
