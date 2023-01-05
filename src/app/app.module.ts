import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopToolbarModule } from './top-toolbar/top-toolbar.module';

import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // MatButtonModule,
    MatIconModule,
    // MatListModule,
    // MatSidenavModule,
    MatToolbarModule,
    MatSlideToggleModule,
    TopToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
