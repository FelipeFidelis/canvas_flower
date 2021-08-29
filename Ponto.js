const painel = document.querySelector('canvas');
let pincel = painel.getContext('2d');
pincel.strokeStyle = 'black';

const pi = Math.PI;

export class Ponto {

  constructor (x, y, raio, start, end) {
    this.x = x;
    this.y = y;
    this.raio = raio;
    this.start = start;
    this.end = end;
  }


  curva() {
    pincel.beginPath();
    pincel.arc(this.x, this.y, this.raio, this.start, this.end, true);
    pincel.stroke();
    pincel.closePath();
  }

  circulinho() {
    pincel.beginPath();
    pincel.arc(this.x, this.y, 2, 0, 2*pi, true);
    pincel.stroke();
    pincel.closePath();
  }
  
} 