import { Component, enableProdMode } from '@angular/core';

@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{
    nombre:string = 'Hulk';
    edad:number = 45;

    get Nombre():string{
        return `${this.nombre} - ${this.edad}`
    }
    get EnMayuscula():string{
        return this.nombre.toUpperCase();
    }
    cambioDeHeroe(new_value:string):void{
        this.nombre=new_value;
    }
}