import {Injectable} from '@angular/core';
import {HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // console.log('Request is on its way');
    // console.log(request.url);
    const modifiedRequest = request.clone({
      headers: request.headers.append('Auth', 'xyz')
    });
    return next.handle(modifiedRequest)
      // .pipe(tap(event => {
      //   console.log(event);
      //   if (event.type === HttpEventType.Response) {
      //     console.log('Response arrived, body data: ');
      //     console.log(event.body);
      //   }
      // }))
      ;
  }
}
