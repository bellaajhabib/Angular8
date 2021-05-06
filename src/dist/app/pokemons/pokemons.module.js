"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const common_1 = require("@angular/common");
const pokemons_routing_module_1 = require("./pokemons-routing.module");
const border_card_directive_1 = require("./border-card.directive");
const pokemon_type_color_pipe_1 = require("./pokemon-type-color.pipe");
const detail_pokemon_1 = require("./detail-pokemon");
const list_pokemon_1 = require("./list-pokemon");
let PokemonsModule = class PokemonsModule {
};
PokemonsModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            pokemons_routing_module_1.PokemonRoutingModule
        ],
        declarations: [
            list_pokemon_1.ListPokemonComponent,
            detail_pokemon_1.DetailPokemonComponent,
            border_card_directive_1.BorderCardDirective,
            pokemon_type_color_pipe_1.PokemonTypeColorPipe
        ],
        providers: []
    })
], PokemonsModule);
exports.PokemonsModule = PokemonsModule;
//# sourceMappingURL=pokemons.module.js.map