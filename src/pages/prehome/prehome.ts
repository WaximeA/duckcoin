import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from "../home/home";
import { LoginPage } from "../login/login";
import { TabsPage } from "../tabs/tabs";

/**
 * Generated class for the PrehomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prehome',
  templateUrl: 'prehome.html',
})
export class PrehomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrehomePage');
  }

  gotoHome() {
    this.navCtrl.push(TabsPage);
  }

  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }

}
