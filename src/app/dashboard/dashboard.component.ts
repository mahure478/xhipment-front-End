import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';
import { UserDetails } from '../shared/user-details';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userDetails : UserDetails = {
    data: {
      userDetails: {
       name : '',
       emailId: ''
      }
   }
  };

  postDetailsForm!: FormGroup;
  showForm: boolean = false;
  showTable: boolean = false;
  showData = new Array();
  constructor(private ds:DashboardService,public auth: AuthService,
              private router: Router) { }

  ngOnInit() {
     this.userDetails = window.history.state;
  }

  /**
   * Call method on Create Posts Click.
   */ 
   createForm() {
    this.showForm = !this.showForm;
    this.postDetailsForm = new FormGroup({
      userId: new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]*$/)]),
      title: new FormControl('',[Validators.required]),
      body: new FormControl('',[Validators.required]),
    })
  }

  /**
   * Call method on Submit click.
   */ 
  createNewPost() {
   let data = {
    userId: +this.postDetailsForm.controls['userId'].value,
    title: this.postDetailsForm.controls['title'].value,
    body: this.postDetailsForm.controls['body'].value,
    edit: false
   }

   if(data.userId && data.title && data.body) {
    this.ds.createNewPost(data).subscribe(res => {
     if(res) {
      this.showData.push(res);
      this.showTable = true;
      this.showForm = false;
     }
    })
   }
  
  }

  /**
   * Logout on click of logout button.
   */
  logout() {
    this.auth.AuthLogout();
    this.router.navigate(['main-page'])
  }

}
