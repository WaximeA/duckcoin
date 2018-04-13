import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { PrehomePage } from '../pages/prehome/prehome';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { BlastingPage } from '../pages/blasting/blasting';
import { WalletPage } from '../pages/wallet/wallet';
import { ProfilePage } from '../pages/profile/profile';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    PrehomePage,
    LoginPage,
    HomePage,
    BlastingPage,
    WalletPage,
    ProfilePage,
    SettingsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrehomePage,
    LoginPage,
    HomePage,
    BlastingPage,
    WalletPage,
    ProfilePage,
    SettingsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
