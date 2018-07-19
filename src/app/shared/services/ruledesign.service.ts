import { Injectable } from '@angular/core';
import { Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { HttpInterceptor } from './httpinterceptor';

@Injectable()
export class RuledesignService {
  serviceUrl = 'https://prototypemora.eu-gb.mybluemix.net';
  //serviceUrl = 'https://moratest.eu-gb.mybluemix.net';
  //serviceUrl = 'http://localhost:8080/led';
  //serviceUrl = 'http://9.79.225.144:8080'; 
  constructor(private http: HttpInterceptor) {
  }
  public addRuleSet(requestJSON: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    /*headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');*/
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url = this.serviceUrl + '/ruleset/add';
    return this.http.post(url, requestJSON, null).map(this.extractReponseData);
  }
  public deleteRuleSet(requestJSON: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url = this.serviceUrl + '/ruleset/delete/' + requestJSON;
    return this.http.delete(url, opts);
  }
  public executeRuleSet(requestJSON: string): Observable<any> {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    /*headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');*/
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url = this.serviceUrl + '/ruleset/execute/' + requestJSON;
    //const temp = this.http.get(url, opts).map(this.extractReponseData);
    return this.http.get(url).map(this.extractReponseData);
  }
  public fetchAllRuleSet(): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    /*headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');*/
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url = this.serviceUrl + '/ruleset/fetchAll';
    console.log('fetchAllRuleSet URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
  public fetchRuleByRuleSetId(requestJSON: string): Observable<any> {
    const headers: Headers = new Headers();
    const opts: RequestOptions = new RequestOptions();
    headers.append('Content-Type', 'application/json');
    /*headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');*/
    opts.headers = headers;
    const url = this.serviceUrl + '/rule/getbyrulesetid/' + requestJSON;
    console.log('fetchRuleByRuleSetId URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
  public fetchRuleSetByRuleSetId(requestJSON: string): Observable<any> {
    const headers: Headers = new Headers();
    const opts: RequestOptions = new RequestOptions();
    headers.append('Content-Type', 'application/json');
    /*headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');*/
    opts.headers = headers;
    const url = this.serviceUrl + '/ruleset/getbyid/' + requestJSON;
    console.log('fetchRuleSetByRuleSetId URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
  private extractReponseData(res: Response) {
    const body = res.json();
    return body;
  }
}
