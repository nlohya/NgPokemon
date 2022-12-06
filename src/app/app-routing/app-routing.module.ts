import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DeckComponent } from '../deck/deck.component';
import { StoreComponent } from '../store/store.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'deck', component: DeckComponent },
  { path: 'store', component: StoreComponent },
  { path: '', redirectTo: '/deck', pathMatch: 'full' },
  { path: '**', redirectTo: '/deck', pathMatch: 'full' },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
