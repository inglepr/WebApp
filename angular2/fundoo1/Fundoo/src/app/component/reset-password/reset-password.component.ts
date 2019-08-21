import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { HttpClient } from '@angular/common/http';
//import { UserService } from 'src/app/core/service/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators, FormGroup,FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';
import { ResetModel } from 'src/app/model/reset-model';
//import { ResetModel } from 'src/app/core/model/reset-model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetUser: ResetModel = new ResetModel();
  token: string;
  resetForm: FormGroup;
    constructor(public FormBuilder: FormBuilder,private snackBar:MatSnackBar,private userService: UserService,private route:ActivatedRoute,private router:Router) { }
  
    ngOnInit() {
  
      this.resetForm = this.FormBuilder.group(
        {
          'password': new FormControl(this.resetUser.password, [Validators.required, Validators.minLength(6)]),
          'confirmPassword': new FormControl(this.resetUser.confirmPassword,[Validators.required,Validators.minLength(6)])
        }
      )
        this.token=this.route.snapshot.paramMap.get('token');
          
    }
  
    onReset(){
      console.log("reset");
      console.log(this.token+""+this.resetUser.password+""+this.resetUser.confirmPassword);
      if (this.resetUser.password != this.resetUser.confirmPassword) throw "Password and Confirm Password does not match";
      if (this.resetUser.password === '' || this.resetUser.confirmPassword === '') throw "Empty fields";
      this.userService.resetUser(this.token , this.resetUser).subscribe(
        (response: any) => {
          if (response.statusCode === 200) {
            console.log(response);
            this.snackBar.open(
              "Password reset Successfully",
              "undo",
              { duration: 2500 }
            )
          } else {
            console.log(response);
            this.snackBar.open(
              "Password reset Failed",
              "undo",
              { duration: 2500 }
            )
          }
        }
      )
    }
  
  }