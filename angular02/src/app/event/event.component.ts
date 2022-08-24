import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  resultado!: number
  tamanho:number = 100

  constructor() { }

  ngOnInit(): void {
  }

  minhafunc() {
    alert("Clicou!")
  }

  somar() {
    let a: number = Number(prompt("Informe o primeiro numero"))
    let b: number = Number(prompt("Informe o segundo numero"))
    this.resultado = a + b
  }

  subtrair() {
    let a: number = Number(prompt("Informe o primeiro numero"))
    let b: number = Number(prompt("Informe o segundo numero"))
    this.resultado = a - b
  }

  dividir() {
    let a: number = Number(prompt("Informe o primeiro numero"))
    let b: number = Number(prompt("Informe o segundo numero"))
    this.resultado = a / b
  }

  multiplicar() {
    let a: number = Number(prompt("Informe o primeiro numero"))
    let b: number = Number(prompt("Informe o segundo numero"))
    this.resultado = a * b
  }

  aumentar(){
  this.tamanho += 40
  }

  diminuir(){
this.tamanho -= 30
  }
}
