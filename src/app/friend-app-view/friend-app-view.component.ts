import { Component } from '@angular/core';
import { ApiFriendsService } from '../api-friends.service';

@Component({
  selector: 'app-friend-app-view',
  templateUrl: './friend-app-view.component.html',
  styleUrls: ['./friend-app-view.component.css']
})
export class FriendAppViewComponent {

constructor(private api:ApiFriendsService){
   api.fetchFriends().subscribe(
    (resp)=>{
      this.data=resp

    }
   )
}

data:any=[]

}
