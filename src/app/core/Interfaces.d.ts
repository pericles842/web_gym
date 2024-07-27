export interface ServiceHome {
  icon: string,
  label: string
}

export interface GeneralCompanyServices extends ServiceHome {
  description: string,
  detailed_description:string,
  url: string
  id: number
}

export interface TeamCompany {
  img: string,
  name: string,
  charge: string
}

 