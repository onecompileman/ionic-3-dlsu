import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  hasError = false;
  username = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewWillEnter() {
    console.log(localStorage.getItem('isLogin'));
    const isLogin = localStorage.getItem('isLogin') != null;
    if (isLogin) {
      this.navCtrl.setRoot(HomePage);
    }
  }

  ionViewDidLoad() {}

  signIn() {
    const checkCred = this.username === 'admin' && this.password === '12345';
    this.hasError = !checkCred;
    if (checkCred) {
      localStorage.setItem('isLogin', 'true');
      this.navCtrl.setRoot(HomePage);
    }
  }
}
