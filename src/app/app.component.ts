import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { ContactComponent } from './shared/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { JobDetailComponent } from './shared/job-detail/job-detail.component';
import { ApplicationComponent } from './application/application.component';
import { BlogComponent } from './shared/blog/blog.component';
import { BlogDetailsComponent } from './shared/blog-details/blog-details.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HomeComponent, JobComponent, ContactComponent, HeaderComponent, FooterComponent, JobDetailComponent, ApplicationComponent, BlogComponent, BlogDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project';
}
