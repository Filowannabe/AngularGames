import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (form.invalid) return

    Swal.fire({ allowOutsideClick: false, text: 'Charging...', icon: 'info', confirmButtonText: 'Ok' })
    Swal.showLoading()

    this.auth.loginRest(this.user).subscribe(res => {
      let idToken = ''
      Object.entries(res).forEach(it => { if (it[0] === 'idToken') idToken = it[1] })
      if (idToken !== '') this.auth.saveToken(idToken);
      Swal.close()
      this.router.navigateByUrl('/videogames');
    }, err => {
      Swal.fire({ allowOutsideClick: false, text: err.error.error.message, icon: 'error', confirmButtonText: 'Ok' })
    })
  }

}
