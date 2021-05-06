import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user-data';
import { UserFetch } from '../user-fetch';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  users: User[];
  user: UserFetch;
  displayData: boolean;
  constructor(private dataservice: DataService) { }

  idtodelete=0;
  deleteUser() {
    this.dataservice.deleteUser(this.idtodelete).subscribe(data => {
      this.getUsers();
    });
  }

  getUsers(){
    this.dataservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  ngOnInit() {
    this.getUsers();
    this.deleteUser();
  }

}
