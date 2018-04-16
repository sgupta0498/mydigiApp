import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab3Root = ContactPage;
  constructor(public navCtrl: NavController) {

  }
  doScan(){
        // console.log('scannig product barcode');
        // this.platform.ready().then(() => {
        //     BarcodeScanner.scan().then((result) => {
        //         if (!result.cancelled) {
        //             this.barcodeText = result.text;
        //             this.barcodeFormat = result.format;
        //         }
        //     }, (error) => {
        //         console.log('error when scanning product barcode');
        //
        //     });
        // });
  }
}
