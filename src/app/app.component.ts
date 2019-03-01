import {Component} from '@angular/core';
import {ProductService} from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent {
  title = 'My Second Angular Project';
  // isValid = true;
}

