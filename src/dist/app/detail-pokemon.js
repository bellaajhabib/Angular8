"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const mock_pokemons_1 = require("./mock-pokemons");
let DetailPokemonComponent = class DetailPokemonComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.pokemons = null;
        this.pokemon = null;
    }
    ngOnInit() {
        this.pokemons = mock_pokemons_1.POKEMONS;
        let id = +this.route.snapshot.paramMap.get('id');
        for (let i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    }
    goBack() {
        this.router.navigate(['/pokemons']);
    }
};
DetailPokemonComponent = __decorate([
    core_1.Component({
        selector: 'detail-pokemon',
        templateUrl: './app/detail-pokemon.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router])
], DetailPokemonComponent);
exports.DetailPokemonComponent = DetailPokemonComponent;
//# sourceMappingURL=detail-pokemon.js.map