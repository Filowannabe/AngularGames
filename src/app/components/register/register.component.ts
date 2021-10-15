import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    console.log(form)
    if (form.invalid) return
    this.auth.registerREST(this.user).subscribe(res => console.log(res), err => console.log(err))
  }

}
