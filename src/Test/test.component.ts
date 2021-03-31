import {Component, OnInit} from '@angular/core';

import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemons";

@Component({
    selector: 'pokemon-app',
    templateUrl: `./test.component.html`,
})
export class TestComponent implements OnInit{
    private name = 'Angular';
    private pokemons:Pokemon[] = null;
    //private values:string ='';
     private colorNg:string ='red';
    private age:number = 20;
    ngOnInit(){
        this.pokemons=POKEMONS;
    }
    selectPokemon(pokemon: Pokemon){
        console.log(`vous avec cliqué sur ${pokemon.name}`)
    }
    // onKey(value: string){
    //     this.value = 'Bonjour '+value;
    // }
}
