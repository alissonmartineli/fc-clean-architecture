import { v4 as uuid } from "uuid";
import Product from "../../../domain/product/entity/product";
import type ProductRepositoryInterface from "../../../domain/product/repository/product-repository.interface";
import {
  type InputCreateProductDto,
  type OutputCreateProductDto,
} from "./create.product.dto";

export default class CreateProductUseCase {
  private readonly productRepository: ProductRepositoryInterface;

  constructor(productRepository: ProductRepositoryInterface) {
    this.productRepository = productRepository;
  }

  async execute(input: InputCreateProductDto): Promise<OutputCreateProductDto> {
    const product = new Product(uuid(), input.name, input.price);

    await this.productRepository.create(product);

    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
