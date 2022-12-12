import { TestBed } from '@angular/core/testing';
import { Action, StoreModule } from '@ngrx/store';
import { of, ReplaySubject, throwError } from 'rxjs';
import { UserEffects } from './user.effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { UserActions, UserActionType } from './user.actions';
import { UserService } from '@core/services/user/user.service';
import { User } from '@shared/models/user.model';
import { USER_MOCK } from '@shared/models/mock/user.model.mock';

describe('GIVEN: UserEffects', () => {
  let userService: UserService;
  let userEffects: UserEffects;
  let actions: ReplaySubject<Action>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot([])],
      providers: [
        UserEffects,
        {
          provide: UserService,
          useValue: {
            get: () => of([]),
          },
        },
        provideMockActions(() => actions),
      ],
    });
    userService = TestBed.inject(UserService);
    userEffects = TestBed.inject(UserEffects);
  });

  describe('WHEN: load$', () => {
    describe('WHEN: success', () => {
      let newAction: UserActionType;
      let response: { payload: User[] };
      beforeEach(() => {
        jest.spyOn(userService, 'get').mockReturnValue(of([USER_MOCK]));
        actions = new ReplaySubject(1);
        actions.next(UserActions.load());
        userEffects.load$.subscribe((data) => {
          let { type, ...payload } = data;
          newAction = type;
          response = payload as { payload: User[] };
        });
      });

      it('THEN: should return loadSuccess action', () => {
        expect(newAction).toEqual(UserActionType.LOAD_USERS_SUCCESS);
      });
      it('THEN: should return payload', () => {
        expect(response.payload).toEqual([USER_MOCK]);
      });
    });

    describe('WHEN: failure', () => {
      let newAction: UserActionType;
      let response: { reason: string };
      beforeEach(() => {
        jest
          .spyOn(userService, 'get')
          .mockReturnValue(throwError(() => new Error('some error')));
        actions = new ReplaySubject(1);
        actions.next(UserActions.load());
        userEffects.load$.subscribe((data) => {
          let { type, ...payload } = data;
          newAction = type;
          response = payload as { reason: string };
        });
      });
      it('THEN: should return loadFail action', () => {
        expect(newAction).toEqual(UserActionType.LOAD_USERS_FAILURE);
      });
      it('THEN: should return reason', () => {
        expect(response.reason).toEqual('some error');
      });
    });
  });
});
