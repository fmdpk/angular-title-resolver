import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  template: `
    <h1>Product Details</h1>
    <p>Product ID: {{ productId }}</p>
  `,
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent implements OnInit {
  productId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Access the 'id' parameter from the route
    this.productId = this.route.snapshot.paramMap.get('id');
  }
}
