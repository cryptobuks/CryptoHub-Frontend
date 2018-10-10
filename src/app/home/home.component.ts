import { Component, OnInit } from '@angular/core';
import { CoinService } from '../../services/coin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private coinService: CoinService
  ) { }

  ngOnInit() {
    
  }

}
