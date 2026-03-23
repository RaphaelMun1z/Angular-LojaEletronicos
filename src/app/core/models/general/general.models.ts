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
  { id: 1, name: 'Motor', iconName: 'engine' },
  { id: 2, name: 'Freios', iconName: 'brake-disc' },
  { id: 3, name: 'Iluminacao', iconName: 'lightbulb' },
  { id: 4, name: 'Acessorios', iconName: 'car-front' },
  { id: 5, name: 'Som & Eletrica', iconName: 'battery' },
  { id: 6, name: 'Pneus & Rodas', iconName: 'tire' },
];

export const FLASH_OFFERS: Product[] = [
  {
    id: 101,
    name: 'Kit revisao completa com filtros de ar, oleo e combustivel',
    brand: 'Bosch',
    oldPrice: 329.9,
    price: 249.99,
    discount: 24,
    rating: 5,
    reviews: 120,
    stockLeft: 15,
    image: 'https://placehold.co/300x300/2b2b2b/f5f5f5?text=Kit+Revisao',
  },
  {
    id: 102,
    name: 'Jogo de pastilhas de freio dianteiras ceramicas premium',
    brand: 'Cobreq',
    oldPrice: 289.0,
    price: 199.99,
    discount: 28,
    rating: 5,
    reviews: 450,
    stockLeft: 8,
    image: 'https://placehold.co/300x300/2b2b2b/f5f5f5?text=Pastilhas',
  },
  {
    id: 103,
    name: 'Par de amortecedores pressurizados para hatch e sedan',
    brand: 'Monroe',
    oldPrice: 499.0,
    price: 369.99,
    discount: 25,
    rating: 4,
    reviews: 890,
    stockLeft: 42,
    image: 'https://placehold.co/300x300/2b2b2b/f5f5f5?text=Amortecedores',
  },
  {
    id: 104,
    name: 'Bateria automotiva selada 60Ah de alta partida',
    brand: 'Heliar',
    oldPrice: 1200.0,
    price: 899.99,
    discount: 25,
    rating: 5,
    reviews: 300,
    stockLeft: 5,
    image: 'https://placehold.co/300x300/2b2b2b/f5f5f5?text=Bateria+60Ah',
  },
];

export const RECOMMENDED_PRODUCTS: Product[] = [
  {
    id: 201,
    name: 'Farol principal com lente cristal e encaixe original',
    brand: 'Arteb',
    oldPrice: 799.9,
    price: 699.99,
    discount: 8,
    rating: 5,
    image: 'https://placehold.co/300x300/efe7dc/2b2b2b?text=Farol',
  },
  {
    id: 202,
    name: 'Par de lampadas super brancas para farol e milha',
    brand: 'Philips',
    oldPrice: 299.9,
    price: 189.99,
    discount: 36,
    rating: 4,
    image: 'https://placehold.co/300x300/efe7dc/2b2b2b?text=Lampadas',
  },
  {
    id: 203,
    name: 'Jogo de velas de ignicao para motores flex',
    brand: 'NGK',
    oldPrice: 250.0,
    price: 169.9,
    discount: 32,
    rating: 4,
    image: 'https://placehold.co/300x300/efe7dc/2b2b2b?text=Velas',
  },
  {
    id: 204,
    name: 'Kit embreagem completo para uso urbano e estrada',
    brand: 'Luk',
    oldPrice: 1599.0,
    price: 999.99,
    discount: 37,
    rating: 5,
    image: 'https://placehold.co/300x300/efe7dc/2b2b2b?text=Kit+Embreagem',
  },
  {
    id: 205,
    name: 'Sensor ABS com chicote reforcado para reposicao',
    brand: 'Delphi',
    oldPrice: 399.9,
    price: 249.99,
    discount: 37,
    rating: 5,
    image: 'https://placehold.co/300x300/efe7dc/2b2b2b?text=Sensor+ABS',
  },
  {
    id: 206,
    name: 'Palheta premium em silicone para chuva intensa',
    brand: 'Valeo',
    oldPrice: 299.9,
    price: 149.99,
    discount: 50,
    rating: 3,
    image: 'https://placehold.co/300x300/efe7dc/2b2b2b?text=Palhetas',
  },
];
