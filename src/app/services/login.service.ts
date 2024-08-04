import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    isUserLoggedIn = new BehaviorSubject<boolean>(false);
    onCheckLogin() {
      this.isUserLoggedIn.next(!this.isUserLoggedIn.value);
    }
}