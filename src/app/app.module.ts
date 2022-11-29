import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsAppAddComponent } from './friends-app-add/friends-app-add.component';
import { FriendAppViewComponent } from './friend-app-view/friend-app-view.component';
import { FriendAppSearchComponent } from './friend-app-search/friend-app-search.component';
import { RouterModule,Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
const myroute:Routes=[
  {
    path:'',
    'component':FriendsAppAddComponent
  },
  {
    path:'view',
    'component':FriendAppViewComponent
  },{
    path:'search',
    'component':FriendAppSearchComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    FriendsAppAddComponent,
    FriendAppViewComponent,
    FriendAppSearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     RouterModule.forRoot(myroute),
     FormsModule,
     HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
