export class Coin {
  rank: Number;
  name: String;
  symbol: String;
  circulating_supply: Number;
  total_supply: Number;
  max_supply: Number;
  price: Number;
  volume_24h: Number;
  percentage_change_1h: Number;
  percentage_change_24h: Number;
  percentage_change_7d: Number;
  market_cap: Number;

  public constructor(data: any) {
    this.rank = data.cmc_rank;
    this.name = data.name;
    this.symbol = data.symbol;
    this.circulating_supply = data.circulating_supply;
    this.total_supply = data.total_supply;
    this.max_supply = data.max_supply;
    this.price = data.quote.USD.price;
    this.volume_24h = data.quote.USD.volume_24h;
    this.percentage_change_1h = data.quote.USD.percent_change_1h;
    this.percentage_change_24h = data.quote.USD.percent_change_24h;
    this.percentage_change_7d = data.quote.USD.percent_change_7d;
    this.market_cap = data.quote.USD.market_cap;
  }
}