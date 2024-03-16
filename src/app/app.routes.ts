import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JobComponent } from './job/job.component';
import { ApplicationComponent } from './application/application.component';
import { SharedComponent } from './shared/shared.component';
import { ContactComponent } from './shared/contact/contact.component';
import { JobDetailComponent } from './shared/job-detail/job-detail.component';
import { BlogComponent } from './shared/blog/blog.component';
import { BlogDetailsComponent } from './shared/blog-details/blog-details.component';

export const routes: Routes = [
  {'path': '', component:HomeComponent},
  {'path': 'job', component:JobComponent},
  {'path': 'app', component:ApplicationComponent},
  {'path': 'shared', component:SharedComponent},
  {'path': 'contact', component:ContactComponent},
  {'path': 'job-detail', component:JobDetailComponent},
  {'path': 'blog', component:BlogComponent},
  {'path': 'blog-details', component:BlogDetailsComponent},
];
