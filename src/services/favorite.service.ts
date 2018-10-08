import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class FavoriteService {

  private apiUrl = 'https://crypto-hub-backend.herokuapp.com/api';

  onToggleFavorite: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private http: HttpClient
  ) {}

  toggleFavorite(coinId: string) {
    this.http.post(this.apiUrl + '/favorite', {
      coinId
    }, httpOptions).subscribe((data: any) => {
      this.onToggleFavorite.emit(data.isTokenVisible);
    })
  }

}