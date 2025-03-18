// title-resolver.service.ts
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class TitleResolverService implements Resolve<void> {
  constructor(private titleService: Title) {}

  resolve(route: ActivatedRouteSnapshot): void {
    if (route.routeConfig?.title) {
      let title = route.routeConfig?.title;
      this.titleService.setTitle(title as string);
    } else {
      const productId = route.paramMap.get('id');
      this.titleService.setTitle(`Product Details - ${productId}`);
    }
  }
}
