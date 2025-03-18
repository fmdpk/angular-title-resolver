import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h1>Product List</h1>
    <ul>
      <li *ngFor="let product of products">
        <a [routerLink]="['/product', product.id]">
          {{ product.id }} - {{ product.name }}: {{ product.price | currency }}
        </a>
      </li>
    </ul>
  `,
  styleUrl: './products-list.component.scss',
})
export class ProductsListComponent {
  products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 150 },
    { id: 3, name: 'Product C', price: 200 },
  ];
}
