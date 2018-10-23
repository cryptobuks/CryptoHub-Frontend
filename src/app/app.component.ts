import { Component, OnInit } from '@angular/core';
import { CoinService } from '../services/coin.service';
import { Coin } from '../models/coin.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
    private coinService: CoinService
  ) {}

  ngOnInit() {
    // this.coinService.fetchCoins();
  }
}
