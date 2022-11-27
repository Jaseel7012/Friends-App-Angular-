import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsAppAddComponent } from './friends-app-add/friends-app-add.component';
import { FriendAppViewComponent } from './friend-app-view/friend-app-view.component';
import { FriendAppSearchComponent } from './friend-app-search/friend-app-search.component';
import { RouterModule,Routes } from '@angular/router';
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
    FriendAppSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
