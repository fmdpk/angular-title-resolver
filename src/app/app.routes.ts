import { Routes } from '@angular/router';
import { ProductDetailComponent } from './features/components/product-detail/product-detail.component';
import { TitleResolverService } from './core/services/title-resolver.service';
import { ProductsListComponent } from './features/components/products-list/products-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' }, // Default route
  {
    path: 'products',
    component: ProductsListComponent,
    title: 'Products List',
    resolve: {
      title: TitleResolverService,
    },
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
    resolve: {
      title: TitleResolverService, // Attach the resolver
    },
  },
  { path: '**', redirectTo: 'products', pathMatch: 'full' }, // Wildcard route
];
