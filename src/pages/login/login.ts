import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { ProfilePage } from "../profile/profile";
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  private dataArray: any[];
  private users = {
    name: '',
    contact: '',
    email: ''
  };

  postData() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
    this.navCtrl.push(ProfilePage, TabsPage);
  }

}
