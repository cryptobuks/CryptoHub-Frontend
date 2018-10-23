import { Component, OnInit, Input } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: {} = {}
  isLoggedIn: boolean = false;

  constructor(
    private userAuthService: UserAuthService,
    private userService: UserService
  ) { }

  isMenuVisible: boolean = false;

  ngOnInit() {
    this.userAuthService.onVerifiedLogin.subscribe(userData => {
      this.isLoggedIn = true;
      this.userData = userData;
    })
    this.userAuthService.onUpdateToken.subscribe(token => {
      this.userAuthService.isTokenVerified(token);
    })
  }

  logout() {
    this.userAuthService.onDeleteToken.subscribe(() => {
      this.isLoggedIn = false;
      this.userData = {};
    })
    this.userAuthService.deleteToken();
  }

}
