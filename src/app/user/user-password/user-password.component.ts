import { Component, Inject, OnInit } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { User } from "src/app/model/user";

@Component({
  selector: "app-user-password",
  templateUrl: "./user-password.component.html",
  styleUrls: ["./user-password.component.scss"],
})
export class UserPasswordComponent implements OnInit {
  data: User;

  constructor(
    public dialogRef: MatDialogRef<UserPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public user: User
  ) {
    this.data = user;
  }

  ngOnInit(): void {}

  onNoClick() {
    this.dialogRef.close;
  }
}
