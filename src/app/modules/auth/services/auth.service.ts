import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private API_URL: string = 'Ff';
  private successUserLogin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private httpCLient: HttpClient) {}

  public isUserLogged(): Observable<boolean> {
    return this.successUserLogin$;
  }

  public login(login): Observable<void> {
    return of(null);
  }
}
