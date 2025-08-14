import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken();
    // if (authToken) {
    //   const authReq = req.clone({
    //     headers: req.headers.set('Authorization', authToken)
    //   })
    //   console.log(req);
    //   return next.handle(authReq);
    // }
    return next.handle(req)
    // .pipe(
    //   tap({
    //     next: (event) => {
    //       if (event instanceof HttpRequest) {
    //         console.log('T: ' + event);
    //       }
    //     }
    //   })
    // );
  }
}
