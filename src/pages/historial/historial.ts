import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { HistorialProvider } from '../../providers/historial/historial';
import { ScanData } from '../../models/scan-data.model';

/**
 * Generated class for the HistorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historial',
  templateUrl: 'historial.html',
})
export class HistorialPage {
  historial: ScanData[] = [];
  constructor(private _historialProvider: HistorialProvider) {}

  ionViewDidLoad() {
    this.historial = this._historialProvider.cargar_historial();
  }

  abrir_scan(){
    this._historialProvider.abrirCodigoQR();
  }

}
