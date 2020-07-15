import { GroupsComponent } from './../components/groups/groups.component';
import { LoginComponent } from './../components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedPageComponent } from './feed-page/feed-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/feedPage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'feedPage', component: FeedPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
