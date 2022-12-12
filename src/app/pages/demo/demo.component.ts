import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@redux/app.state';
import { UserActions } from '@redux/user/user.actions';
import {
  selectUsers,
  selectUsersLoaded,
  selectUsersLoading,
} from '@redux/user/user.selectors';
import { distinctUntilChanged, shareReplay } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
})
export class DemoComponent {
  constructor(private _store: Store<AppState>) {
    this._store.dispatch(UserActions.load());
  }

  usersLoading$ = this._store
    .select(selectUsersLoading)
    .pipe(
      shareReplay({ bufferSize: 1, refCount: true }),
      distinctUntilChanged()
    );

  usersLoaded$ = this._store
    .select(selectUsersLoaded)
    .pipe(
      shareReplay({ bufferSize: 1, refCount: true }),
      distinctUntilChanged()
    );

  users$ = this._store
    .select(selectUsers)
    .pipe(
      shareReplay({ bufferSize: 1, refCount: true }),
      distinctUntilChanged()
    );

  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'company'];
}
