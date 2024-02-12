import type ValidatorInterface from "../../@shared/validator/validator.interface";
import type ProductInterface from "../entity/product.interface";
import ProductYupValidator from "../validator/product.yup.validator";

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class ProductValidatorFactory {
  static create(): ValidatorInterface<ProductInterface> {
    return new ProductYupValidator();
  }
}
