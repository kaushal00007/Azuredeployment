import { AdminMgmtModule } from './admin-mgmt/admin-mgmt.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './start/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule, MatDialogModule, MatIconModule, MatRippleModule} from '@angular/material';
import { SuccessDialogComponent } from './shared/dialogs/success-dialog/success-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RetailGuard } from './guards/retail.guard';
import { LoaderComponent } from './shared/loader/loader.component';
import { CustomInterceptor } from './interceptor/custom.interceptor';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { SomethingWrongDialogComponent } from './shared/dialogs/something-wrong-dialog/something-wrong-dialog.component';
import { SharedModule } from './shared/shared.module';
import { AdminMgmtComponent } from './admin-mgmt/admin-mgmt.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    LoginComponent,
    SuccessDialogComponent,
    PageNotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatRippleModule,
    MatCheckboxModule,
    DeviceDetectorModule.forRoot(),
    SharedModule,
    AdminMgmtModule,
  ],
  providers: [
    RetailGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    SuccessDialogComponent,
    SomethingWrongDialogComponent
  ]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
