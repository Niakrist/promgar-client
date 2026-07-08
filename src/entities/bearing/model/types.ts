export interface IProduct {
  id: string;
  name: string;
  url: string;
  title: string;
  description: string;
  price: string;
  article: string;
  quantity: number;
  weight: number;
  content: string;
  innerDiameter: number;
  outerDiameter: number;
  width: number;
  brand: null;
  bearingType: BearingType;
  rollingElement: BearingType;
  rowType: BearingType;
  loadType: BearingType;
  characteristics: Characteristics;
  canonicalPath: string;
  createdAt: string;
  updatedAt: string;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
  alt: string;
  sortOrder: number;
}

export type Characteristics = Record<string, any>;

export interface BearingType {
  id: string;
  name: string;
  slug: string;
  img: string | null;
}