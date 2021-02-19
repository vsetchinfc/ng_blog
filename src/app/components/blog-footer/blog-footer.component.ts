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
}
