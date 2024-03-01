import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  respuesta: number;
  numero?: number;
  acierto: boolean;
  mensaje: string;

  constructor() {
    this.respuesta = 0;
    this.acierto = false;
    this.mensaje = "";
  }

  // Genera el primer número a adivinar
  ngOnInit() {
    this.generarNumero();
  }

  // Genera un número del 0 al 100
  generarNumero() {
    this.respuesta = Math.floor(Math.random() * 101);
    console.log(this.respuesta);
  }

  comprobarNumero(){
    if (Number(this.numero) > 100 || Number(this.numero) < 0) {
      console.log("Introduce un número entre 0 y 100");
      this.mensaje = "Introduce un número entre 0 y 100";
    } else {
      this.mensaje = "";
    }
  }

  botonComprobar() {
    if(Number(this.numero) == this.respuesta){
      this.acierto = true;
      this.mensaje = "Has acertado"
    } else if(Number(this.numero) < this.respuesta){
      this.acierto = false;
      this.mensaje="El número secreto es mayor";
    } else if(Number(this.numero) > this.respuesta){
      this.acierto = false;
      this.mensaje="El número secreto es menor";
    }
  }
}
