import {Component, OnInit} from '@angular/core';

import {Pokemon} from "./pokemons/pokemon";
import {POKEMONS} from "./pokemons/mock-pokemons";

@Component({
    selector: 'pokemon-app',
    templateUrl: `./app/app.component.html`,
})
export class AppComponent implements OnInit{
    private name = 'Angular';
    private pokemons:Pokemon[] = null;
    //private values:string ='';
     private colorNg:string ='';
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
