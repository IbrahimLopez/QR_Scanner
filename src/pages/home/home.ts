import { Component } from '@angular/core';
/**Plugins */
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**Components] */
import { ToastController, Platform } from 'ionic-angular';

/**Providers */
import { HistorialProvider } from './../../providers/historial/historial';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private barcodeScanner: BarcodeScanner, private toastCtrl: ToastController,
    private platform: Platform, private _historialProvider: HistorialProvider) {

  }

  escanear() {
    if (!this.platform.is('cordova')) {
      this._historialProvider.agregarHistorial(`BEGIN:VCARD
VERSION:2.1
N:Kent;Clark
FN:Clark Kent
ORG:
TEL;HOME;VOICE:12345
TEL;TYPE=cell:67890
ADR;TYPE=work:;;;
EMAIL:clark@superman.com
END:VCARD`);
      return;
    }

    this.barcodeScanner.scan().then(barcodeData => {
      console.log("We got a barcode\n" +
        "Result: " + barcodeData.text + "\n" +
        "Format: " + barcodeData.format + "\n" +
        "Cancelled: " + barcodeData.cancelled);

      if (barcodeData.cancelled == false && barcodeData.text != null) {
        this._historialProvider.agregarHistorial(barcodeData.text);
      }

    }).catch(err => {
      console.log('Error', err);
      this.mensajeError('Error' + err)
    });
  }

  mensajeError(mensaje: string) {
    const toast = this.toastCtrl.create({
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
