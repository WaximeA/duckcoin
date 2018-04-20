import { NgModule } from '@angular/core';
import { TransactionComponent } from './transaction/transaction';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
	  TransactionComponent],
	imports: [
	  BrowserModule,
    HttpClientModule,
  ],
	exports: [TransactionComponent]
})

export class ComponentsModule {}
