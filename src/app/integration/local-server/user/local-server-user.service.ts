import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserServiceIntegrationApi } from '@core/services/user/integration/api';
import { User } from '@shared/models/user.model';
import { Observable } from 'rxjs';
import { LocalServerApi } from '../local-server.api';

@Injectable()
export class LocalServerUserService implements UserServiceIntegrationApi {
  constructor(private _http: HttpClient, private _api: LocalServerApi) {}
  get(): Observable<User[]> {
    return this._http.get<User[]>(this._api.usersUrl);
  }
}
