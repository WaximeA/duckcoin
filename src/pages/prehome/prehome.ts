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

  slides = [
    {
      title: "Welcome to Duckcoin!",
      description: "<b>Duckcoin</b> is the first cryptocurrency with a beak. <br/><i>*quack quack*</i>",
      image: "../../assets/imgs/logo-duck.jpg",
    },
    {
      title: "WTF is this ?",
      description: "This is an open source project to test <b>Ionic</b> features and create my first cryptocurrency.",
      image: "../../assets/imgs/prehome-img-1.png",
    },
    {
      title: "Who made this ?",
      description: "It's me, <b>Maxime AVELINE</b> aka <b>Waxime</b>. <br/> I'm a french developer student who live in Troyes and Paris.",
      image: "../../assets/imgs/wax.jpg",
    }
  ];

}
