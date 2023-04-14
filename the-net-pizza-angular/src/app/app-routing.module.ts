import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './components/contacts/contacts.component';
import { PageMenuComponent } from './components/page-menu/page-menu.component';
import { PiattoDetailComponent } from './components/piatto-detail/piatto-detail.component';
import { EditPiattoComponent } from './components/edit-piatto/edit-piatto.component';

const routes: Routes = [
  { path: 'menu', component: PageMenuComponent}, 
  { path: 'menu/:piattoId', component: PiattoDetailComponent}, 
  { path: 'edit', component: EditPiattoComponent}, 
  { path: 'edit/:piattoId', component: EditPiattoComponent}, 
  { path: 'contatti', component: ContactsComponent },
  { path: '', redirectTo: 'menu', pathMatch: 'full' },
  { path: '**', redirectTo: 'menu'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
