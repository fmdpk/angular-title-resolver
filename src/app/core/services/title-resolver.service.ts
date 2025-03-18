// title-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleResolverService implements Resolve<void> {
  constructor(private titleService: Title, private metaService: Meta) {}

  resolve(route: ActivatedRouteSnapshot): void {
    if (route.routeConfig?.title) {
      let title = route.routeConfig?.title;
      this.titleService.setTitle(title as string);

      // Update meta tags dynamically
      this.metaService.updateTag({
        name: 'description',
        content: `Products List`,
      });
      this.metaService.updateTag({
        name: 'keywords',
        content: `Products List`,
      });
      this.metaService.updateTag({
        name: 'author',
        content: 'Farzin Mossaed',
      });
    } else {
      const productId = route.paramMap.get('id');
      this.titleService.setTitle(`Product Details - ${productId}`);
      // Update meta tags dynamically
      this.metaService.updateTag({
        name: 'description',
        content: `Details and features of product ${productId}`,
      });
      this.metaService.updateTag({
        name: 'keywords',
        content: `product ${productId}, online store, buy product`,
      });
      this.metaService.updateTag({
        name: 'author',
        content: 'Farzin Mossaed',
      });
    }
  }
}
