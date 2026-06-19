export interface Brand {
  id: number;
  slug: string;
  name: string;
  image?: string;
}

export interface RollingBody {
  id: number;
  slug: string;
  name: string;
  image?: string;
}

export interface LoadDirection {
  id: number;
  slug: string;
  name: string;
  image?: string;
}

export interface RowCount {
  id: number;
  slug: string;
  name: string;
  image?: string;
}

export interface BearingType {
  id: number;
  slug: string;
  name: string;
  image?: string;
}

export interface ProductUrl {
  id: number;
  path: string;
  isCanonical: boolean;
}

export interface IProduct {
  id: number;
  slug: string;
  title: string;
  description: string | null;
  price: string | null;
  images: string[];
  content: string | null;
  innerDiameterMm: number | null;
  outerDiameterMm: number | null;
  widthMm: number | null;
  attributes: Record<string, any> | null;
  brand: Brand | null;
  rollingBody: RollingBody | null;
  loadDirection: LoadDirection | null;
  rowCount: RowCount | null;
  bearingType: BearingType | null;
  urls: ProductUrl[];
  createdAt: string;
  updatedAt: string;
}

export interface CatalogResponse {
  items: IProduct[];
  total: number;
  meta?: {
    title: string;
    h1: string;
    description: string;
  };
}
