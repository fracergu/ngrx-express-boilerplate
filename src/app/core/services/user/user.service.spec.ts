import { User } from '@shared/models/user.model';
import { Observable, of } from 'rxjs';
import { UserServiceIntegrationApi } from './integration/api';
import { UserService } from './user.service';

class UserIntegrationServiceMock implements UserServiceIntegrationApi {
  get = (): Observable<User[]> => of([] as User[]);
}

describe('GIVEN: UserService', () => {
  let api: UserServiceIntegrationApi;
  let service: UserService;

  beforeEach(() => {
    api = new UserIntegrationServiceMock();
    service = new UserService(api);
  });

  it('THEN: should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('WHEN: Get', () => {
    beforeEach(() => {
      jest.spyOn(api, 'get');
      service.get();
    });
    it('THEN: api service should be called', () => {
      expect(api.get).toHaveBeenCalled();
    });
  });
});
