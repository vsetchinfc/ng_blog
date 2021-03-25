import { Component, OnInit } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-footer',
  templateUrl: './blog-footer.component.html',
  styleUrls: ['./blog-footer.component.scss'],
})
export class BlogFooterComponent implements OnInit {
  constructor(private blogConfigService: BlogConfigService) {}

  ngOnInit(): void {}

  get fullName() {
    return this.blogConfigService.fullName;
  }

  get github_social_contact() {
    return this.blogConfigService.github_social_contact;
  }

  get linkedin_social_contact() {
    return this.blogConfigService.linkedin_social_contact;
  }

  get twitter_social_contact() {
    return this.blogConfigService.twitter_social_contact;
  }
}
