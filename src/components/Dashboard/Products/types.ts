export interface Product {
  productType: string;
  name: string;
  code: string;
  barcode: string;
  category: string;
  cost: number;
  price: number;
  taxMethod: string;
  quantity: number;
  image?: string;
  description?: string;
}
