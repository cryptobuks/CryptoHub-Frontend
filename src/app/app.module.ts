import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ShortenNumberPipe } from '../pipes/shorten-number.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CoinService } from '../services/coin.service';
import { FavoriteService } from '../services/favorite.service';
import { UserService } from '../services/user.service';
import { UserAuthService } from '../services/user-auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CheckLoginComponent } from './check-login/check-login.component';
import { CookieService } from 'ngx-cookie-service';
import { CoinsComponent } from './home/coins/coins.component';
import { CoinComponent } from './home/coins/coin/coin.component';

@NgModule({
  declarations: [
    ShortenNumberPipe,
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    CheckLoginComponent,
    CoinsComponent,
    CoinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent }
    ])
  ],
  providers: [
    CoinService,
    FavoriteService,
    UserService,
    UserAuthService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
