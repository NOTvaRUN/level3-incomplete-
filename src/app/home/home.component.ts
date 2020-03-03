import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor() {}
  users = [];
  ngOnInit(): void {
    for (var i = 0; i < localStorage.length; i++) {
      // set iteration key name
      var key = localStorage.key(i);

      // use key name to retrieve the corresponding value
      var value = localStorage.getItem(key);

      // console.log the iteration key and value
      this.users.push(value);
    }
    console.log(this.users);
  }

  getval(use, message) {
    let data = use + " " + message;
    localStorage.setItem(use, data);

    //     var user = {'name':'John'};
    // sessionStorage.setItem('user', user);
    // var obj = sessionStorage.user;
  }
}
