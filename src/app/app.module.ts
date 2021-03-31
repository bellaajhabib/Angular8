import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {BorderCardDirective} from "./border-card.directive";
import {FormsModule} from "@angular/forms";
import {DetailPokemonComponent} from "./detail-pokemon";
import {ListPokemonComponent} from "./list-pokemon";
import {AppRoutingModule} from "./app-routing.module";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {PageNotFoundComponent} from "./page-not-found.component";

@NgModule({
    imports: [BrowserModule, FormsModule,AppRoutingModule],
    declarations: [ AppComponent,BorderCardDirective ,DetailPokemonComponent,ListPokemonComponent,PokemonTypeColorPipe,
                    PageNotFoundComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
