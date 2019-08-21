import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { MatSnackBar } from '@angular/material';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userLogin:User = new User();
  loginForm:FormGroup;
  token:string
  emailId:string
  emailId1:any

  constructor(public formBuilder: FormBuilder,private snackBar: MatSnackBar,private userService:UserService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'emailId': new FormControl(this.userLogin.emailId, Validators.required),
        'password': new FormControl(this.userLogin.password, [Validators.required, Validators.minLength(6)])
    })
  }

  onLogin(){
    console.log(this.userLogin);
    console.log(+this.token);
    this.emailId1 = this.userLogin.emailId;
    this.userService.loginUser(this.userLogin).subscribe(
      (response: any) => {
        if (response.statusCode === 200) {
          console.log("response =========>",response);

          localStorage.setItem("token",response.token);
          localStorage.setItem("emailId",response.emailId);
          localStorage.setItem("firstname",response.firstName);
          localStorage.setItem("lastname",response.lastName);

        //  console.log("in login email",localStorage.getItem("emailId "));
          this.router.navigate(['/dashboard'])
          this.snackBar.open(
            "Login Successfully",
            "undo",
            { duration: 2500 }
          )
         // this.router.navigate(['/dashboard/note'])
        } else {
          console.log(response); 
          this.snackBar.open(
            "Login Failed",
            "undo",
            { duration: 2500 }
          )
        }

      }
    )
  }

}