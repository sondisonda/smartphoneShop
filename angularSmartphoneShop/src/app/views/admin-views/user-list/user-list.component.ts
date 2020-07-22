import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar, MatSort, MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/services/user/user.service';
import { Users } from 'src/app/domain/external/users';
import { UserWindowComponent} from 'src/app/views/admin-views/user-list/user-window/user-window.component';
import {ConfirmDialogComponent} from 'src/app/views/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  private columnsToDisplay: string[] = ['id', 'username', 'roleType', 'edit', 'delete'];

  users: Users[];

  dataSource: MatTableDataSource<Users>;



  emptyString = '';

  constructor(public userService: UserService,  public dialog: MatDialog, ) {  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      this.dataSource = new MatTableDataSource<Users>(this.users);
    });
  }


  addButtonClick() {
    const dialogRef = this.dialog.open(UserWindowComponent, {
      width: '800px',
      data: new Users()
    });

    dialogRef.afterClosed().subscribe(users => {
      if (users) {
        users.id = -1;
        this.userService.addUser(users).subscribe(data => {
          console.log(data);
          this.reloadData();
        });
      }
    });
  }


  editButtonClick(index: number) {
    const dialogRef = this.dialog.open(UserWindowComponent, {
      width: '800px',
      data: this.users[index]
    });

    dialogRef.afterClosed().subscribe(users => {
      if (users) {
        this.userService.updateUser(users).subscribe(data => {
          this.reloadData();
        });
      }
    });
  }


  eraseButtonClick(id: number) {
    const dialogConfirm  = this.dialog.open(ConfirmDialogComponent, {
      width: '3000',
      data: this.users[id].userName
    });

    dialogConfirm.afterClosed().subscribe(confirm => {
      if (confirm) {
        this.userService.deleteUser(this.users[id]).subscribe(info => {
          console.log(info);
          this.reloadData();
        });
      }
    });
  }



}
