import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';

import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./page-not-found.component";
import {PokemonsModule} from "./pokemons/pokemons.module";

@NgModule({
    imports: [
        BrowserModule,
        PokemonsModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
