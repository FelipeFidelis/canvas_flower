import { Ponto } from '/Ponto.js';


const pi = Math.PI;

let raio = 150;
let raio45 = 150 * (Math.sqrt(2)/2) ;



while(raio < 151) {
  
  const angulo0   = new Ponto(500 + raio, 500, raio, (3*pi)/2, pi/2);
  const angulo45  = new Ponto(500 + raio45, 500 - raio45, raio , (5*pi)/4, (pi)/4);
  const angulo90  = new Ponto(500, 500 - raio, raio , pi, 0);
  const angulo135 = new Ponto(500 - raio45, 500 - raio45, raio , (3*pi)/4, (7*pi)/4);
  const angulo180 = new Ponto(500 - raio, 500, raio , (pi)/2, (3*pi)/2);
  const angulo225 = new Ponto(500 - raio45, 500 + raio45, raio , (pi)/4, (5*pi)/4);
  const angulo270 = new Ponto(500, 500 + raio, raio , 0, pi);
  const angulo315 = new Ponto(500 + raio45, 500 + raio45, raio , (7*pi)/4, (3*pi)/4);

  angulo0.curva();
  angulo45.curva();
  angulo90.curva();
  angulo135.curva();
  angulo180.curva();
  angulo225.curva();
  angulo270.curva();
  angulo315.curva();

  raio += 0.1
  raio45 += 0.1 * (Math.sqrt(2)/2)

}
