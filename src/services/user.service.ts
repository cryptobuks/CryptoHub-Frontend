import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable()
export class UserService {

  private apiUrl = 'https://crypto-hub-backend.herokuapp.com/user';

  onLogIn: EventEmitter<string> = new EventEmitter();
  onSignUp: EventEmitter<string> = new EventEmitter();

  constructor(
    private http: HttpClient
  ) {}

  login(email: String, password: String) {
    this.http.post(this.apiUrl + '/login', {
      email,
      password
    }, httpOptions).subscribe((data: any) => {
      if(data.err) return alert(data.err);
      this.onLogIn.emit(data.token);
    })
  }

  signup(email: String, password: String) {
    this.http.post(this.apiUrl + '/signup', {
      email,
      password
    }, httpOptions).subscribe((data: any) => {
      if(data.err) return alert(data.err);
      this.onSignUp.emit(data.token);
    })
  }

}