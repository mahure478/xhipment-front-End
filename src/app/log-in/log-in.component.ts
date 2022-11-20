import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(public auth: AuthService,private router:Router) { }

  ngOnInit(): void {
    //this.onLogin();
  }

  onLogin() {
    this.auth.GoogleAuth().then((res:any) => {
      let userDetails = {
        name: res.user.displayName,
        emailId: res.user.email
      }
     this.router.navigate(['/dashboard'], {state:{data:{userDetails}}});
    });
  }

}
