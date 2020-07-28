import {Component, Inject, OnInit} from '@angular/core';
import {APP_PUBLIC_API_TOKEN, AppConfig} from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public serverUrl: string;
  public port: number;

  constructor(@Inject(APP_PUBLIC_API_TOKEN) appConfig: AppConfig) {
    this.serverUrl = appConfig.serverUrl;
    this.port = appConfig.port;
  }

  public ngOnInit(): void {
  }
}
