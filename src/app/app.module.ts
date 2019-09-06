import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



//Routes
import { APP_ROUTES } from "./app.routes";

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SearchComponent } from './components/shared/search/search.component';
import { CardComponent } from './components/card/card.component';
import { ArtistComponent } from './components/artist/artist.component';
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchComponent,
    CardComponent,
    ArtistComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES,{
      useHash: true 
    }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
