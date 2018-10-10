import { Component, OnInit } from '@angular/core';
import { CoinService } from '../services/coin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  coins: any[] = [];

  constructor(
    private coinService: CoinService
  ) {}

  ngOnInit() {
    // this.coinService.onGetCoins.subscribe(coins => this.coins = coins);
    // this.coinService.getCoins();
  }
}
