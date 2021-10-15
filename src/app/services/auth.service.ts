import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlRest = 'https://identitytoolkit.googleapis.com/v1/accounts'


  apikey = environment.firebase.apiKey;
  urlRegister = ':signUp?key=';
  urlLogin = ':signInWithPassword?key=';

  userToken: string = ""

  constructor(private http: HttpClient) { }

  registerREST(user: User) {
    const data = { ...user, returnSecureToken: true }
    return this.http.post(`${this.urlRest}${this.urlRegister}${this.apikey}`, data)
  }

  loginRest(user: User) {
    const data = { ...user, returnSecureToken: true }
    return this.http.post(`${this.urlRest}${this.urlLogin}${this.apikey}`, data)

  }

  saveToken(token: string) {
    this.userToken = token
    localStorage.setItem('token', token)
  }

  readToken() {
    if (localStorage.getItem('token')) this.userToken! != localStorage.getItem('token')
    else this.userToken = ''

    return this.userToken
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('token')) return true
    else return false
  }

  setAuthNavBar() {
    if (!localStorage.getItem('token')) {
      (document.querySelector('.nav-menu-no-login') as HTMLUListElement).style.display = 'flex';
      (document.querySelector('.nav-menu') as HTMLUListElement).style.display = 'none';
    } else {
      (document.querySelector('.nav-menu') as HTMLUListElement).style.display = 'flex';
      (document.querySelector('.nav-menu-no-login') as HTMLUListElement).style.display = 'none';
    }
  }
}
