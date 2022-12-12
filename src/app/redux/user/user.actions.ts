import { createAction, props } from '@ngrx/store';
import { User } from '@shared/models/user.model';

export enum UserActionType {
  LOAD_USERS = '[User] Load Users',
  LOAD_USERS_SUCCESS = '[User] Load Users Success',
  LOAD_USERS_FAILURE = '[User] Load Users Failure',
}

const load = createAction(UserActionType.LOAD_USERS);

const loadSuccess = createAction(
  UserActionType.LOAD_USERS_SUCCESS,
  props<{ payload: User[] }>()
);

const loadFailure = createAction(
  UserActionType.LOAD_USERS_FAILURE,
  props<{ reason: string }>()
);

export const UserActions = {
  load,
  loadSuccess,
  loadFailure,
};
