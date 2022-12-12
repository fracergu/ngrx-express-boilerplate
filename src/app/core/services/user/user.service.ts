import { Inject, Injectable } from '@angular/core';
import { User } from '@shared/models/user.model';
import { Observable } from 'rxjs';
import { UserServiceIntegrationApi } from './integration/api';

@Injectable({
  providedIn: 'root',
})
export class UserService implements UserServiceIntegrationApi {
  constructor(
    @Inject('UserServiceIntegrationApi')
    private _userServiceIntegrationApi: UserServiceIntegrationApi
  ) {}

  get(): Observable<User[]> {
    return this._userServiceIntegrationApi.get();
  }
}
