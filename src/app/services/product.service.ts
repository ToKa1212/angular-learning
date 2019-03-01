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
        description: 'Proof of work',
        rating: 3,
        numOfreviews: 3,
        url: 'https://coinmarketcap.com/currencies/bitcoin/',
        urlBuy: 'https://www.etoro.com/markets/btc'
      },
      {
        imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png',
        productName: 'Ethereum',
        releaseDate: 'August 07, 2015',
        description: 'Proof of stake',
        rating: 4,
        numOfreviews: 4,
        url: 'https://coinmarketcap.com/currencies/ethereum/',
        urlBuy: 'https://www.etoro.com/markets/ethereum'
      },
      {
        imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/52.png',
        productName: 'XRP',
        releaseDate: 'August 04, 2013',
        description: 'Proof of consensus',
        rating: 5,
        numOfreviews: 55,
        url: 'https://coinmarketcap.com/currencies/ripple/',
        urlBuy: 'https://www.etoro.com/markets/xrp'
      },
      {
        imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1765.png',
        productName: 'EOS',
        releaseDate: 'Jul 01, 2017',
        description: 'Proof of stake',
        rating: 3,
        numOfreviews: 4,
        url: 'https://coinmarketcap.com/currencies/eos/',
        urlBuy: 'https://www.etoro.com/markets/eos'
      },
      {
        imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/2.png',
        productName: 'Litecoin',
        releaseDate: 'May 01, 2013',
        description: 'Proof of work',
        rating: 2,
        numOfreviews: 4,
        url: 'https://coinmarketcap.com/currencies/litecoin/',
        urlBuy: 'https://www.etoro.com/markets/ltc'
      },
      {
        imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/32x32/1831.png',
        productName: 'Bitcoin Cash',
        releaseDate: 'Jul 23, 2017',
        description: 'Proof of work',
        rating: 2,
        numOfreviews: 55,
        url: 'https://coinmarketcap.com/currencies/bitcoin-cash/',
        urlBuy: 'https://www.etoro.com/markets/bch'
      }];
  }

  constructor() {
  }
}
