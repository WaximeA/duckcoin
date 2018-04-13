import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { TabsPage } from "../tabs/tabs";
import { LoginPage } from "../login/login";
import { ModalController } from 'ionic-angular';
import { TransactionPage } from '../transaction/transaction';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  selected : any = '';
  items : any = [];
  transactions : any = [];
  i: any = [];

  // Chart.js
  @ViewChild('lineCanvas') lineCanvas;
  lineChart: any;


  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    this.items = [
      {'title':'Bitcoin', 'currency':'btc', 'price':'5000€'},
      {'title':'Ethereum', 'currency':'eth', 'price':'500€'},
      {'title':'Ripple', 'currency':'xrp', 'price':'0.4€'}
    ];
    this.transactions = [
      {
        'sender': 'charles',
        'recipient': 'maxime',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'raphael',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'doreen',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'louis-joseph',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'elise',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'germain',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'anthony',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'pol',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'vincent',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'nicolas',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'kevin',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'willy',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'elodie',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'adrien',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'romain',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'quentin',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'jean-etienne',
        'amount': 100,
      },
      {
        'sender': 'charles',
        'recipient': 'gael',
        'amount': 100,
      }
    ];
  }

  openModal(transaction) {
    let modal = this.modalCtrl.create(TransactionPage, { 'transaction': transaction });
    modal.present();
  }

  itemSelected(transactions) {
    this.selected = transactions;
  }

  gotoHome() {
    this.navCtrl.push(TabsPage);
  }

  gotoLogin() {
    this.navCtrl.push(LoginPage);
  }

  ionViewDidLoad() {


    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
        datasets: [{
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "BTC",
          borderColor: "#3e95cd",
          fill: false
        }, {
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "ERT",
          borderColor: "#8e5ea2",
          fill: false
        }, {
          data: [799,882,178,190,270,276,352,277,192,289],
          label: "XRP",
          borderColor: "#3cba9f",
          fill: false
        }, {
          data: [168,170,178,1110,1803,1976,2608,2947,2785,2583],
          label: "DKC",
          borderColor: "#1a8b8a",
          fill: false
        }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'BTC, ETH, XRP and DKC Stock rate'
        }
      }

    });
  }
}
