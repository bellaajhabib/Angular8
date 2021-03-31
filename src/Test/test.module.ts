import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TestComponent} from './test.component';
import {BorderCardDirective} from "./border-card.directive";

@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ TestComponent,BorderCardDirective ],
    bootstrap:    [ TestComponent ]
})
export class TestModule { }
