import {Component, OnInit} from '@angular/core';

import {Pokemon} from "./pokemon";
import {POKEMONS} from "./mock-pokemons";
import {Router} from "@angular/router";

@Component({
    selector: 'list-pokemon',
    templateUrl: `../../app/pokemons/list-pokemon.html`,
})
export class ListPokemonComponent implements OnInit{
    private name = 'Angular';
    private pokemons:Pokemon[] = null;
    //private values:string ='';
    private colorNg:string ='';
    private age:number = 20;
    constructor(private router:Router) {

    }
    ngOnInit(){
        this.pokemons=POKEMONS;
    }
    selectPokemon(pokemon: Pokemon){
        console.log(`vous avec cliqué sur ${pokemon.name}`)
        let link = ['/pokemon',pokemon.id];
        this.router.navigate(link);
    }

}
