import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContactsComponent } from './components/contacts/contacts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroContentComponent } from './components/hero-content/hero-content.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuSectionComponent } from './components/menu-section/menu-section.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { AngularMaterialModule } from './@shared/angular-material.module';
import { HttpClientModule } from '@angular/common/http';
import { PiattoDetailComponent } from './components/piatto-detail/piatto-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroContentComponent,
    MenuComponent,
    MenuSectionComponent,
    MenuItemComponent,
    FooterComponent,
    ContactsComponent,
    PiattoDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
