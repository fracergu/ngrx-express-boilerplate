import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { environment } from '@env/environment';
import { LocalServerModule } from '@integration/local-server/local-server.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    RouterModule,
    LocalServerModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule,
  ],
  providers: [
    {
      provide: 'UserServiceIntegrationApi',
      useClass: environment.integration.user,
    },
  ],
  exports: [HttpClientModule, BrowserAnimationsModule],
})
export class CoreModule {}
