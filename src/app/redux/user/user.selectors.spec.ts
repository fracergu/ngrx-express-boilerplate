import { AppState, initialAppState } from '@redux/app.state';
import { USER_MOCK } from '@shared/models/mock/user.model.mock';
import { initialUserState, UserState } from './user.state';
import * as UserSelectors from './user.selectors';

const INITIAL_USER_STATE_MOCK: UserState = {
  ...initialUserState,
  users: [USER_MOCK],
};

const INITIAL_STATE_MOCK: AppState = {
  ...initialAppState,
  user: INITIAL_USER_STATE_MOCK,
};

describe('GIVEN: User selectors', () => {
  describe('WHEN: selectUserState', () => {
    it('THEN: should return user state', () => {
      const result = UserSelectors.selectUserState(INITIAL_STATE_MOCK);
      expect(result).toEqual(INITIAL_USER_STATE_MOCK);
    });
  });

  describe('WHEN: selectUsers', () => {
    it('THEN: should return the users', () => {
      const result = UserSelectors.selectUsers(INITIAL_STATE_MOCK);
      expect(result).toEqual(INITIAL_USER_STATE_MOCK.users);
    });
  });

  describe('WHEN: selectUsersLoading', () => {
    it('THEN: should return the loading', () => {
      const result = UserSelectors.selectUsersLoading(INITIAL_STATE_MOCK);
      expect(result).toEqual(INITIAL_USER_STATE_MOCK.loading);
    });
  });

  describe('WHEN: selectUsersLoaded', () => {
    it('THEN: should return the loaded', () => {
      const result = UserSelectors.selectUsersLoaded(INITIAL_STATE_MOCK);
      expect(result).toEqual(INITIAL_USER_STATE_MOCK.loaded);
    });
  });
});
