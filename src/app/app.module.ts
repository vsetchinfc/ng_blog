import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { IconsModule } from './icons/icons.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';
import { BlogFooterComponent } from './components/blog-footer/blog-footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogPostCardComponent } from './components/blog-post-card/blog-post-card.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IdCardComponent } from './components/id-card/id-card.component';
import { BlogConfigService } from './services';
import { HttpClientModule } from '@angular/common/http';

const BLOG_CONFIG_PROVIDER = [
  {
    provide: APP_INITIALIZER,
    multi: true,
    deps: [BlogConfigService],
    useFactory: (blogConfigService: BlogConfigService) => {
      return () => {
        debugger;
        return blogConfigService.loadBlogConfig();
      };
    },
  },
];

const PROVIDERS = [...BLOG_CONFIG_PROVIDER];

@NgModule({
  declarations: [
    AppComponent,
    BlogHeaderComponent,
    BlogFooterComponent,
    BlogPostCardComponent,
    SidebarComponent,
    IdCardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    NgbModule,
    IconsModule,
  ],
  providers: [...PROVIDERS],
  bootstrap: [AppComponent],
})
export class BlogAppModule {}
