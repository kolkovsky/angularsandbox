import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  constructor(private router: Router) {
  }

  public ngOnInit(): void {
  }

  public login(): void {
    this.router.navigateByUrl('/dashboard').then((isNavigated: boolean) => console.log(isNavigated));
  }
}
