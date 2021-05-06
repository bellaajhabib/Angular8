import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PokemonRoutingModule} from "./pokemons-routing.module";
import { BorderCardDirective } from './border-card.directive';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import {DetailPokemonComponent} from "./detail-pokemon";
import {ListPokemonComponent} from "./list-pokemon";


@NgModule({
    imports: [
        CommonModule,
        PokemonRoutingModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: []
})
export class PokemonsModule { }
