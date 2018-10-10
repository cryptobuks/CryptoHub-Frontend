import { Component, OnInit, Input } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: {} = {}
  isLoggedIn: boolean = false;

  constructor(
    private userAuthService: UserAuthService
  ) { }

  isMenuVisible: boolean = false;

  ngOnInit() {
    console.log(this.isLoggedIn);
    this.userAuthService.onVerifiedLogin.subscribe(userData => {
      this.isLoggedIn = true;
      console.log(this.isLoggedIn);
      this.userData = userData;
    })
  }

}
