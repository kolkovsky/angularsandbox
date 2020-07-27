import {InjectionToken} from '@angular/core';

export const APP_PUBLIC_API_TOKEN: InjectionToken<string> = new InjectionToken<string>('api.server');

export interface AppConfig {
  serverUrl: string;
  port: number;
}

export const APP_SERVER_CONFIG: AppConfig = {
  serverUrl: 'server/url',
  port: 3000
};

