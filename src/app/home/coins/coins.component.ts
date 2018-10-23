import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../../services/coin.service';
import { Coin } from '../../../models/coin.model';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  btc_price: Number;
  coins: Coin[] = [];
  isLoaded: boolean = false;

  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit() {
    // Get coin data
    this.coinService.onGetCoins.subscribe((coins: Coin[]) => {
      this.coins = coins;
      this.btc_price = coins[0].price;
      this.isLoaded = true;
    });
    this.coinService.getCoins();
  }
}
