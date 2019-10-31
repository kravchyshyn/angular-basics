import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

export class AuthInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const cloned = req.clone({
            headers: req.headers.append('Auth', 'Some random token')
        })

        console.log('Intercept request: ', cloned)
        return next.handle(cloned).pipe(
            tap(event => {
                if (event.type === HttpEventType.Response) {
                    console.log('Intercept response', event)
                }
            })
        )
    }


}