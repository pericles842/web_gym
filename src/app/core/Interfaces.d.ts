
export interface GeneralCompanyServices {
  icon: string,
  label: string
  description: string,
  detailed_description: string,
  url: string
  id: number
}

export interface TeamCompany {
  img: string,
  name: string,
  charge: string
}

export interface Contact {
  direction: string,
  number: number | string
  email: string
}