import { HttpClient, HttpParams } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { USER_MOCK } from '@shared/models/mock/user.model.mock';
import { of, take } from 'rxjs';
import { LocalServerApi } from '../local-server.api';
import { LocalServerUserService } from './local-server-user.service';

describe('GIVEN: LocalServierUserService', () => {
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;
  let service: LocalServerUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LocalServerUserService,
        {
          provide: LocalServerApi,
          useValue: {
            usersUrl: '/api/users',
          },
        },
      ],
    });
    service = TestBed.inject(LocalServerUserService);
    httpMock = TestBed.inject(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('THEN: should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('WHEN: Get', () => {
    let actual: any;
    beforeEach(() => {
      jest.spyOn(httpClient, 'get').mockReturnValue(of([USER_MOCK]));
      service
        .get()
        .pipe(take(1))
        .subscribe((data) => (actual = data));
    });

    it('THEN: should call http get', () => {
      expect(httpClient.get).toHaveBeenCalled();
    });

    it('THEN: should return the expected data', () => {
      expect(actual).toEqual([USER_MOCK]);
    });
  });
});
