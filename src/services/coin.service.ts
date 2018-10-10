import { Injectable, EventEmitter } from "@angular/core";
import { environment } from '../environments/environment';
import { HttpHeaders, HttpClient } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class CoinService {

  private apiUrl = 
  `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${environment.COIN_MARKETCAP_API_KEY}`;

  onGetCoins: EventEmitter<any> = new EventEmitter();

  constructor(
    private http: HttpClient
  ) {}
  
  getCoins() {
    this.http.get(this.apiUrl, httpOptions)
    .subscribe((data: any) => {
      this.onGetCoins.emit(data.data);
    })
  }

}