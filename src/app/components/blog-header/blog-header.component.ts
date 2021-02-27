import { Component, OnInit } from '@angular/core';
import { BlogConfigService } from 'src/app/services';

@Component({
  selector: 'blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
})
export class BlogHeaderComponent implements OnInit {
  constructor(private blogConfigService: BlogConfigService) {}

  ngOnInit(): void {}

  get blogName() {
    return this.blogConfigService.blogName;
  }
}
