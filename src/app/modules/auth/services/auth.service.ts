import { Injectable } from "@angular/core";
import { Observable, Subject, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private successUserLogin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() {}

  public isUserLogged(): Observable<boolean> {
    return this.successUserLogin$;
  }
}
