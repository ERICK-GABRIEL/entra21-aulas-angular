import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propert',
  templateUrl: './propert.component.html',
  styleUrls: ['./propert.component.css']
})
export class PropertComponent implements OnInit {

// properties
nome:string = "Erick Gabriel"
sobreNome:string = "Carvalho da Silva"
idade:number= 16
cidade:string = "Mafra"
uf:string="SC"
enderecoImagem:string ="https://cdn.windowsreport.com/wp-content/uploads/2020/06/angular-logo-2.png"
padrao:string = "700"
tabela:string = "table table-bordered table-striped"




  constructor() { }


  ngOnInit(): void {
  }

}
