import {Component} from '@angular/core';
import {ProductService} from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent {
  title = 'My Second Angular App';
  imageUrl = 'https://s2.coinmarketcap.com/static/img/coins/64x64/52.png';
  isValid = true;
}

