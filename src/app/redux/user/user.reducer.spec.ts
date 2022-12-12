import { USER_MOCK } from '@shared/models/mock/user.model.mock';
import { UserActions } from './user.actions';
import { userReducer } from './user.reducer';
import { initialUserState, UserState } from './user.state';

const INITIAL_STATE: UserState = {
  ...initialUserState,
};

describe('GIVEN: User Reducer', () => {
  it('THEN: Unknown action should not modify the state', () => {
    const action = { type: 'UNKNOWN' };
    const newState = userReducer(INITIAL_STATE, action);
    expect(newState).toEqual(INITIAL_STATE);
  });
  it('THEN: Load action should modify the state', () => {
    const action = UserActions.load();
    const newState = userReducer(INITIAL_STATE, action);
    expect(newState).toEqual({
      ...INITIAL_STATE,
      loading: true,
      loaded: false,
      error: undefined,
    });
  });
  it('THEN: Load success action should modify the state', () => {
    const action = UserActions.loadSuccess({ payload: [USER_MOCK] });
    const newState = userReducer(INITIAL_STATE, action);
    expect(newState).toEqual({
      ...INITIAL_STATE,
      users: [USER_MOCK],
      loading: false,
      loaded: true,
      error: undefined,
    });
  });
  it('THEN: Load failure action should modify the state', () => {
    const action = UserActions.loadFailure({ reason: 'some-error' });
    const newState = userReducer(INITIAL_STATE, action);
    expect(newState).toEqual({
      ...INITIAL_STATE,
      loading: false,
      loaded: false,
      error: 'some-error',
    });
  });
});
