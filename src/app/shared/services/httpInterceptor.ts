import { Http, Request, RequestOptionsArgs, XHRBackend }  from '@angular/http';
import { Response, RequestOptions, Headers } from '@angular/http';
import { DialogService } from 'ng2-bootstrap-modal';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

// operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpInterceptor extends Http {
    static dialogService: DialogService;
    constructor(
        backend: XHRBackend,
        options: RequestOptions,
        dialogService: DialogService,
        public http: Http,
    ) {
        super(backend, options);
        HttpInterceptor.dialogService = dialogService;
    }

    public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
        return super.request(url, options)
            .catch(this.handleError);
    }

    public handleError = (error: Response) => {
        // let errMsg = (error.statusText) ? error.statusText : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(error);
    }
 }
