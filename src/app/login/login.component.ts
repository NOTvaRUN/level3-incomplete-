import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  login(username) {
    // localStorage.setItem(username.value, username.value);
    if (username.value == null) {
      return;
    } else {
      sessionStorage.setItem("username", username.value);
      localStorage.setItem(username.value, username.value);
      this.router.navigate(["/home"]);
    }
  }
}
