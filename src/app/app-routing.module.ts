import { LandingPageComponent } from './../components/landingPage/landingPage.component';
import { ExcercisePlanComponent } from './../components/excercisePlan/excercisePlan.component';
import { GroupsComponent } from './../components/groups/groups.component';
import { LoginComponent } from './../components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'groups', component: GroupsComponent },
  { path: 'excercisePlan', component: ExcercisePlanComponent },
  { path: 'landingPage', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
