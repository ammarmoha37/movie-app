import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from '@components/home/home.component';
import { SearchBarComponent } from '@components/search-bar/search-bar.component';
import { SliderComponent } from '@components/home/slider/slider.component';
import { TabsBarComponent } from '@components/tabs-bar/tabs-bar.component';
import { SearchComponent } from '@components/search/search.component';
import { MovieDetailsComponent } from '@components/movie-details/movie-details.component';
import { WatchListComponent } from '@components/watch-list/watch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchBarComponent,
    SliderComponent,
    TabsBarComponent,
    SearchComponent,
    MovieDetailsComponent,
    WatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
