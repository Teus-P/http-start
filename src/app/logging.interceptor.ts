import {Injectable} from '@angular/core';
import {HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler){
    console.log('Outgoing request');
    console.log(request.url);
    return next.handle(request)
      .pipe(tap(event => {
        if(event.type === HttpEventType.Response) {
          console.log('Incoming response');
          console.log(event.body);
        }
      }));
  }
}
