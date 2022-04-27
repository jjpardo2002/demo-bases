import { Component } from '@angular/core';

@Component({
    selector:'app-contar',
    template:`
        <h2>{{titulo}}</h2>
        <button (click)="acumular(incremento)">+{{incremento}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-incremento)">-{{incremento}}</button>   
    `
})
export class ContarComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    incremento  : number = 5;
  
    acumular( valor: number ) {
        this.numero += valor;
    }
}