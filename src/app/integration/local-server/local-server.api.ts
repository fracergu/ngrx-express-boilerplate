import { Injectable } from '@angular/core';
import { LocalServerModule } from './local-server.module';

@Injectable({
  providedIn: LocalServerModule,
})
export class LocalServerApi {
  constructor() {}

  BASE_URL = '/api';

  get baseUrl() {
    return this.BASE_URL;
  }

  get usersUrl() {
    return `${this.baseUrl}/users`;
  }
}
