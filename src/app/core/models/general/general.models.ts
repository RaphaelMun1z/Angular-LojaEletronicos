export interface Product {
  id: number;
  name: string;
  brand: string;
  oldPrice: number;
  price: number;
  discount: number;
  rating: number;
  reviews?: number;
  stockLeft?: number;
  image: string;
}

export interface Department {
  id: number;
  name: string;
  iconName: string;
}

export const DEPARTMENTS: Department[] = [
  { id: 1, name: 'Hardware', iconName: 'cpu' },
  { id: 2, name: 'Periféricos', iconName: 'mouse' },
  { id: 3, name: 'Computadores', iconName: 'monitor' },
  { id: 4, name: 'Games', iconName: 'gamepad-2' },
  { id: 5, name: 'Celular', iconName: 'smartphone' },
  { id: 6, name: 'Áudio', iconName: 'headphones' },
];

export const FLASH_OFFERS: Product[] = [
  {
    id: 101,
    name: 'Placa de Vídeo RTX 4060 Ti Ventus 2X Black',
    brand: 'MSI',
    oldPrice: 3299.9,
    price: 2499.99,
    discount: 24,
    rating: 5,
    reviews: 120,
    stockLeft: 15,
    image: 'https://placehold.co/300x300/1a1a1a/FFF?text=RTX+4060+Ti',
  },
  {
    id: 102,
    name: 'Processador AMD Ryzen 7 5700X3D, 4.1GHz',
    brand: 'AMD',
    oldPrice: 1899.0,
    price: 1349.99,
    discount: 28,
    rating: 5,
    reviews: 450,
    stockLeft: 8,
    image: 'https://placehold.co/300x300/1a1a1a/FFF?text=Ryzen+7',
  },
  {
    id: 103,
    name: 'SSD 1TB Kingston NV2, M.2 2280 NVMe',
    brand: 'Kingston',
    oldPrice: 499.0,
    price: 369.99,
    discount: 25,
    rating: 4,
    reviews: 890,
    stockLeft: 42,
    image: 'https://placehold.co/300x300/1a1a1a/FFF?text=SSD+1TB',
  },
  {
    id: 104,
    name: 'Monitor Gamer 24" 144Hz IPS 1ms FreeSync',
    brand: 'LG',
    oldPrice: 1200.0,
    price: 899.99,
    discount: 25,
    rating: 5,
    reviews: 300,
    stockLeft: 5,
    image: 'https://placehold.co/300x300/1a1a1a/FFF?text=Monitor+144Hz',
  },
];

export const RECOMMENDED_PRODUCTS: Product[] = [
  {
    id: 201,
    name: 'Console PlayStation 5 Slim Edição Digital',
    brand: 'Sony',
    oldPrice: 3799.9,
    price: 3499.99,
    discount: 8,
    rating: 5,
    image: 'https://placehold.co/300x300/eeeeee/333?text=PS5+Slim',
  },
  {
    id: 202,
    name: 'Headset Gamer HyperX Cloud Stinger 2',
    brand: 'HyperX',
    oldPrice: 299.9,
    price: 189.99,
    discount: 36,
    rating: 4,
    image: 'https://placehold.co/300x300/eeeeee/333?text=Headset',
  },
  {
    id: 203,
    name: 'Teclado Mecânico Redragon Kumara Switch Blue',
    brand: 'Redragon',
    oldPrice: 250.0,
    price: 169.9,
    discount: 32,
    rating: 4,
    image: 'https://placehold.co/300x300/eeeeee/333?text=Teclado+Mec',
  },
  {
    id: 204,
    name: 'Cadeira Gamer Alpha Gamer Vega Black',
    brand: 'Alpha',
    oldPrice: 1599.0,
    price: 999.99,
    discount: 37,
    rating: 5,
    image: 'https://placehold.co/300x300/eeeeee/333?text=Cadeira+Gamer',
  },
  {
    id: 205,
    name: 'Mouse Gamer Logitech G502 HERO 25K',
    brand: 'Logitech',
    oldPrice: 399.9,
    price: 249.99,
    discount: 37,
    rating: 5,
    image: 'https://placehold.co/300x300/eeeeee/333?text=Mouse+G502',
  },
  {
    id: 206,
    name: 'Gabinete Gamer Rise Mode Glass 06',
    brand: 'Rise Mode',
    oldPrice: 299.9,
    price: 149.99,
    discount: 50,
    rating: 3,
    image: 'https://placehold.co/300x300/eeeeee/333?text=Gabinete',
  },
];
