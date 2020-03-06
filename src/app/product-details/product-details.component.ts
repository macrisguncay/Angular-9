import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductId();
  }

  getProductId(): void {
    this.route.paramMap.subscribe(params => {
      this.product = this.productService.getProductById(+params.get('productId')).subscribe((data) => {
        this.products = data.filter(prod => prod.id === +params.get('productId'));
        this.product = this.products[0];
      });
    });
  }

}
