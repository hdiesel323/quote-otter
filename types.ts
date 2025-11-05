export enum InsuranceCategory {
  Auto = 'Auto',
  Home = 'Home',
  Life = 'Life',
  Renters = 'Renters',
}

export interface InsuranceType {
  id: InsuranceCategory;
  label: string;
  iconId: string;
}
