import { User } from '@shared/models/user.model';
import { Observable } from 'rxjs';

export interface UserServiceIntegrationApi {
  get(): Observable<User[]>;
}
