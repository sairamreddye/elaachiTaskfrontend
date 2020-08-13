import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user_operations/user.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  users: any = [];
  p: number = 1;
  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.gettotalUsersData().subscribe((data: any) => {
      this.users = data.users;
      console.log(this.users);
    })
  }

}
