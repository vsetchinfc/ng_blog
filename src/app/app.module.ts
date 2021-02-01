import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from './icons/icons.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { BlogFooterComponent } from './components/blog-footer/blog-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, BlogHeaderComponent, BlogFooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    NgbModule,
    IconsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
