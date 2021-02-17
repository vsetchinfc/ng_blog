import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface BlogConfig {
  blog_version: string;
  full_name: string;
  blog_name: string;
}

@Injectable({
  providedIn: 'root',
})
export class BlogConfigService {
  private blogConfig!: BlogConfig;

  constructor(private http: HttpClient) {}

  loadBlogConfig() {
    debugger;
    return this.http
      .get('/assets/config.json')
      .toPromise()
      .then((data) => {
        this.blogConfig = <BlogConfig>data;
      });
  }

  get blogVersion() {
    return this.blogConfig.blog_version;
  }

  get fullName() {
    return this.blogConfig.full_name;
  }

  get blogName() {
    return this.blogConfig.blog_name;
  }
}
