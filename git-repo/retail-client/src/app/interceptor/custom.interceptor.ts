import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, throwError, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HelperService } from '../services/helper.service';
import * as token from '../data/token.json';
import * as cats from '../data/cats.json';
import * as items from '../data/items.json';
import * as itemDetails from '../data/itemDetails.json';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  constructor(private helperService: HelperService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if (!environment.production) {
      return this.MockApiRequest(request);
    }

    return next.handle(request).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.helperService.signOut();
          }
        }
        return throwError(error);
      }),
    );
  }

  private MockApiRequest(request: HttpRequest<unknown>) {
    console.log('Loaded from json : ' + request.url);
    var api = request.url.substr(request.url.lastIndexOf('/') + 1);
    switch (api) {
      case 'token':
        return of(new HttpResponse({ status: 200, body: ((token) as any).default }));
        break;
      case 'cats':
        return of(new HttpResponse({ status: 200, body: ((cats) as any).default }));
        break;
      case 'items':
        return of(new HttpResponse({ status: 200, body: ((items) as any).default }));
        break;
      case 'itemDetails':
        return of(new HttpResponse({ status: 200, body: ((itemDetails) as any).default }));
        break;
      default:
        return of(new HttpResponse({ status: 200, body: ((itemDetails) as any).default }));
    }
  }
}
