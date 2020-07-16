import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../modules/material.module';
import { LoginComponent } from './../components/login/login.component';
import { GroupsComponent } from './../components/groups/groups.component';
import { ExcercisePlanComponent } from './../components/excercisePlan/excercisePlan.component';
import { AddPostDialogComponent } from './../components/addPostDialog/addPostDialog.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { WorkoutComponent } from '../components/workout/workout.component';
import { FeedPageComponent } from './feed-page/feed-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GroupsComponent,
    ExcercisePlanComponent,
    WorkoutComponent,
    FeedPageComponent,
    AddPostDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
