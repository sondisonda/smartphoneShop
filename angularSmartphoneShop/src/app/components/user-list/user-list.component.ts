import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/services/user/user.service';
import { Users } from 'src/app/domain/external/users';
import { Roletype } from 'src/app/domain/enum/roletype.enum';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private columnsToDisplay: string[] = ['id', 'username', 'roleType'];
  dataSource: MatTableDataSource<Users>;

  users: Users[];




  emptyString = '';
 

  constructor(public userService: UserService ) {  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource<Users>(this.users);
    });
  }

}
