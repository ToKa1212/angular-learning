import {Component, OnInit} from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {

  products;

  constructor(productService: ProductService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

}
