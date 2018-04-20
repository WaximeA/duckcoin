import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl='https://duckcoin.charlesen.fr';

/**
 * Generated class for the TransactionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'transaction',
  templateUrl: 'transaction.html'
})
export class TransactionComponent {

  transactions: any = [];

  constructor(private http: HttpClient) {
    // Get content with Http Get request
    this.http.get(`${apiUrl}/transactions`).subscribe(
      data => {
        this.transactions = data['transactions'];
      }, err => {
        console.log("Une erreur s'est produite.");
      });
  }

}
