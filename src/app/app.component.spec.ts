import { TestBed } from '@angular/core/testing';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('GIVEN: AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreModule, SharedModule, RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('THEN: should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
