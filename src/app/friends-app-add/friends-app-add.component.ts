import { Component } from '@angular/core';
import { ApiFriendsService } from '../api-friends.service';

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
  constructor(private api:ApiFriendsService){}

  readValue=()=>
  {
    let data:any=
      {"name":this.name,"friendName":this.friendName,"friendNickName":this.friendNickName,"DescribeYourFriend":this.DescribeYourFriend}
    
    console.log(data)
    this.api.addFriends(data).subscribe(
      (resp:any)=>{
        console.log(resp)
        if(resp=="success"){
          alert("successfully inserted")
        }
        else{
          alert("something went wrong")
        }
      }
    )

    
  }
  
}
