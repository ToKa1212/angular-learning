import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  getProducts() {
    return [
      {
        imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1.png',
        productName: 'Bitcoin',
        releaseDate: 'April 28, 2013',
        description: 'Stara kurva',
        rating: 0,
        numOfreviews: 3,
        url: 'https://coinmarketcap.com/currencies/bitcoin/'
      },
      {
        imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png',
        productName: 'Ethereum',
        releaseDate: 'August 07, 2015',
        description: 'Novsia kurva',
        rating: 1,
        numOfreviews: 4,
        url: 'https://coinmarketcap.com/currencies/ethereum/'
      },
      {
        imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/52.png',
        productName: 'XRP',
        releaseDate: 'August 04, 2013',
        description: 'Mega super digitalna jednotka',
        rating: 5,
        numOfreviews: 55,
        url: 'https://coinmarketcap.com/currencies/ripple/'
      }];
  }

  constructor() {
  }
}
