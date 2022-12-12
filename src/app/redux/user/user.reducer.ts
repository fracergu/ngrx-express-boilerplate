import { Action, createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';
import { initialUserState, UserState } from './user.state';

const _userReducer = createReducer(
  initialUserState,
  on(UserActions.load, (state) => ({
    ...state,
    loading: true,
    loaded: false,
    error: undefined,
  })),
  on(UserActions.loadSuccess, (state, { payload }) => ({
    ...state,
    users: payload,
    loading: false,
    loaded: true,
    error: undefined,
  })),
  on(UserActions.loadFailure, (state, { reason }) => ({
    ...state,
    loading: false,
    loaded: false,
    error: reason,
  }))
);

export function userReducer(state: UserState | undefined, action: Action) {
  return _userReducer(state, action);
}
