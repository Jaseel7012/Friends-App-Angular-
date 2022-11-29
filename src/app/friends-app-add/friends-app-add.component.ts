import { Component } from '@angular/core';

@Component({
  selector: 'app-friends-app-add',
  templateUrl: './friends-app-add.component.html',
  styleUrls: ['./friends-app-add.component.css']
})
export class FriendsAppAddComponent {
  name=""
  friendName=""
  friendNickName=""
  DescribeYourFriend=""
  readValue=()=>
  {
    let data:any=
      {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    
    console.log(data)

    
  }
}
