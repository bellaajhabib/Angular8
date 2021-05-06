import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from './pokemon';
import { POKEMONS } from './mock-pokemons';

@Component({
    selector: 'detail-pokemon',
    templateUrl:  "../../app/pokemons/detail-pokemon.html"
})
export class DetailPokemonComponent implements OnInit {

    public pokemons: Pokemon[] = null;
    public pokemon: Pokemon = null;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.pokemons = POKEMONS;

        let id = +this.route.snapshot.paramMap.get('id');
        for (let i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }

}
