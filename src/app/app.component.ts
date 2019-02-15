import {Component} from '@angular/core';
import {ProductService} from './services/product.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <app-products></app-products>
  `,
  providers: [ProductService]
})
export class AppComponent {
  title = 'My Second Angular App';
}
