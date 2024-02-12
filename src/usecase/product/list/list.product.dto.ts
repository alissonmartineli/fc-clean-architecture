// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InputListProductDto {}

export interface OutputListProductDto {
  products: Array<{
    id: string;
    name: string;
    price: number;
  }>;
}
