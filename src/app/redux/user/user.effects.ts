import { Injectable } from '@angular/core';
import { UserService } from '@core/services/user/user.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserActions, UserActionType } from './user.actions';

@Injectable()
export class UserEffects {
  constructor(private _actions: Actions, private _userService: UserService) {}

  load$ = createEffect(() =>
    this._actions.pipe(
      ofType(UserActionType.LOAD_USERS),
      switchMap(() =>
        this._userService.get().pipe(
          map((resp) => UserActions.loadSuccess({ payload: resp })),
          catchError((err) =>
            of(
              UserActions.loadFailure({
                reason: err.message,
              })
            )
          )
        )
      )
    )
  );
}
