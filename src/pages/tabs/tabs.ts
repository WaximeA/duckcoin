import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { BlastingPage } from '../blasting/blasting';
import { WalletPage } from '../wallet/wallet';
import { ProfilePage } from "../profile/profile";
import { SettingsPage } from "../settings/settings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BlastingPage;
  tab3Root = WalletPage;
  tab4Root = ProfilePage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
