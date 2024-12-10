import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './feauters/header/header.component';
import { HeroComponent } from './feauters/hero/hero.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroComponent],
  imports: [BrowserModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
