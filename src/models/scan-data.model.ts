export class ScanData {
    info: string;
    tipo: string;
    fecha: string;
    constructor(texto: string) {

        this.tipo = 'no definido';
        this.info = texto;
        this.fecha = Date.now().toLocaleString("es-ES");
        if (texto.startsWith('http')) {
            this.tipo = 'Sitio Web';
        }else if(texto.startsWith('geo')){
            this.tipo = 'Mapa'          
        }else if(texto.startsWith('BEGIN:VCARD')){
            this.tipo = 'Contacto'
        }else if(texto.startsWith('MATMSG')){
            this.tipo = 'Email'
        }
    }
}