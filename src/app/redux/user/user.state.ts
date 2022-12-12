import { User } from '@shared/models/user.model';

export interface UserState {
  users: User[];
  loading: boolean;
  loaded: boolean;
  error?: string;
}

export const initialUserState: UserState = {
  users: [],
  loading: false,
  loaded: false,
  error: undefined,
};
