import { Injectable, EventEmitter } from "@angular/core";
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient } from "@angular/common/http";

import { Coin } from '../models/coin.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class CoinService {

  private apiUrl = 
  `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${environment.COIN_MARKETCAP_API_KEY}`;

  onGetCoins: EventEmitter<Coin[]> = new EventEmitter();

  private isCoinsFetched: boolean = false;
  private isCoinsFetching: boolean = false;
  private coins: Coin[] = [];

  constructor(
    private http: HttpClient
  ) {}
  
  fetchCoins() {
    this.isCoinsFetching = true;
    this.http.get(this.apiUrl, httpOptions)
    .subscribe((data: any) => {

      // Error check
      if(data.status.error_code !== 0 && data.data.length === 0){
        return alert('Error: ' + data.status.error_message);
      }

      // Create coins from data
      for(let coin of data.data) {
        this.coins.push(new Coin(coin));
      }

      this.isCoinsFetched = true;
      this.isCoinsFetching = false;
      this.onGetCoins.emit(this.coins);
      console.log(this.coins);
    })
  }

  getCoins() { 
    if(this.isCoinsFetched && !this.isCoinsFetching) {
      this.onGetCoins.emit(this.coins);
    } else {
      let interval = setInterval(() => {
        if(this.isCoinsFetched && !this.isCoinsFetching){
          this.onGetCoins.emit(this.coins);
          clearInterval(interval);
        }
      }, 500)
    }
  }

}