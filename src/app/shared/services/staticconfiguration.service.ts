import { Injectable } from '@angular/core';
import { HttpInterceptor } from './httpinterceptor';
import { Observable } from 'rxjs';
import { Response, RequestOptions, Headers, XHRBackend } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class StaticConfigurationService {
  serviceUrl = 'https://prototypemora.eu-gb.mybluemix.net';
  //serviceUrl = 'https://moratest.eu-gb.mybluemix.net';
  //serviceUrl = 'http://9.79.225.144:8080'; 
  //serviceUrl = 'http://localhost:8080/led';
  constructor(private http: HttpInterceptor) { }
  public fetchAll(): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url =  this.serviceUrl + '/staticConfig/fetchAll';
    console.log('fetchAll URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
  private extractReponseData(res: Response) {
    const body = res.json();
    return body;
  }

  public addStaticConf(addStaticConfJson): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url =  this.serviceUrl + '/staticConfig/addRating';
    console.log('addStaticConf URL: ',url);
    console.log('addStaticConfJson: ',addStaticConfJson);
    return this.http.post(url, addStaticConfJson, opts).map(this.extractReponseData);
  }

  public editStaticConf(editStaticConfJson): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url =  this.serviceUrl + '/staticConfig/editRating';
    console.log('editStaticConf URL: ',url);
    console.log('editStaticConf: ',editStaticConfJson);
    return this.http.put(url, editStaticConfJson, opts).map(this.extractReponseData);
  }
  public deleteRating(deleteStaticConfJson): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url =  this.serviceUrl + '/staticConfig/deletebyid/'+deleteStaticConfJson;
    console.log('deleteRating URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
  public approveRating(approveStaticConfJson): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url =  this.serviceUrl + '/staticConfig/approveRating/'+approveStaticConfJson;
    console.log('approveRating URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
  public approveDelete(approveStaticConfJson): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url =  this.serviceUrl + '/staticConfig/approveDeleteRating/'+approveStaticConfJson;
    console.log('approveDelete URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
  public rejectRating(rejectStaticConfJson): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url =  this.serviceUrl + '/staticConfig/rejectRating/'+rejectStaticConfJson;
    console.log('rejectRating URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
}