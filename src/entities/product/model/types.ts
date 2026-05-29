export interface IProduct {
  id: string;
  name: string;
  price: string;
  inD: string;
  wD: string;
  h: string;
  m: string;
  brand: string;
  img: string;
  images: string[];
  specifications: ISpecification[];
  article: string;
}

interface ISpecification {
  name: string;
  value: string;
}
