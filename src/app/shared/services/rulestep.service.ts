import { Injectable } from '@angular/core';
import { HttpInterceptor } from './httpinterceptor';
import { Observable } from 'rxjs';
import { Response, RequestOptions, Headers, XHRBackend } from '@angular/http';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable()
export class RuleStepService {
  serviceUrl = 'https://prototypemora.eu-gb.mybluemix.net';
  //serviceUrl = 'https://moratest.eu-gb.mybluemix.net';
  //serviceUrl = 'http://9.79.225.144:8080'; 
  //serviceUrl = 'http://localhost:8080/led';
  constructor(private http: HttpInterceptor) { }
  public fetchRuleSet(): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url =  this.serviceUrl + '/rule/fetchAll';
    console.log('fetchRuleSet URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
  public createRule(ruleSetId: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url = this.serviceUrl + '/rule/addWithRuleSetId/'+ruleSetId;
    console.log('addWithRuleSetId URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
  public deleteRule(ruleId: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    /*headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');*/
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url = this.serviceUrl + '/rule/deletebyid/'+ruleId;
    console.log('deleteRule URL: ',url);
    return this.http.delete(url, opts);
  }
  public executeRule(ruleId: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url = this.serviceUrl + '/rule/executerule/'+ruleId;
    console.log('executeRule URL: ',url);
    return this.http.get(url, opts).map(this.extractReponseData);
  }
  /*public executeRuleSet(ruleSetId: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url = this.serviceUrl + '/rule/execute/'+ruleSetId;
    console.log('executeRuleSet URL: ',url);
    return this.http.get(url, null).map(this.extractReponseData);
  }*/
  public editRule(ruleId: string, requestJSON: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    const url = this.serviceUrl + '/rule/updatebyid/' + ruleId;
    console.log('editRule URL: ',url);
    console.log('requestJSON: ',requestJSON);
    return this.http.put(url, requestJSON, opts).map(this.extractReponseData);
  }
  private extractReponseData(res: Response) {
    const body = res.json();
    return body;
  }
  public fetchRulebyId(params){
    console.log('fetchRulebyId URL: ');
    this.http.get('./assets/mockjson/rule_design_data1.json').subscribe(
      data => {
        params.api.setRowData(data.json());
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
