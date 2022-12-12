import { createSelector } from '@ngrx/store';
import { AppState } from '@redux/app.state';

export const selectUserState = (state: AppState) => state.user;

export const selectUsers = createSelector(
  selectUserState,
  (state) => state.users
);

export const selectUsersLoading = createSelector(
  selectUserState,
  (state) => state.loading
);

export const selectUsersLoaded = createSelector(
  selectUserState,
  (state) => state.loaded
);
