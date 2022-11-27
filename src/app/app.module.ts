import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FriendsAppAddComponent } from './friends-app-add/friends-app-add.component';
import { FriendAppViewComponent } from './friend-app-view/friend-app-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FriendsAppAddComponent,
    FriendAppViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
