import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({ //decorator type, metadatos
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [] ;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}






