import { Injectable, forwardRef, Inject } from '@angular/core';
import { Http } from '@ramonornela/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class TestService {

  constructor(@Inject(forwardRef(() => Http)) private http: Http) {
  }

  testCall(): Observable<any> {
    return this.http.request('visao', { idUsuario: 1 });
  }

}
