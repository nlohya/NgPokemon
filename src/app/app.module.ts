import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './partials/navbar/navbar.component';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { StoreComponent } from './store/store.component';
import { PokemonCardComponent } from './partials/pokemon-card/pokemon-card.component';
import { StoreService } from './services/store.service';
import { HttpClientModule } from '@angular/common/http';
import { DeckComponent } from './deck/deck.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AttackFilterPipe } from './deck/attack-filter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    NavbarComponent,
    LoginComponent,
    StoreComponent,
    PokemonCardComponent,
    DeckComponent,
    AttackFilterPipe,
  ],
  providers: [LoginService, StoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
