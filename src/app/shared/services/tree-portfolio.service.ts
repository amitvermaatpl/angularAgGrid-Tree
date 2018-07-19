import { Injectable } from '@angular/core';
import { Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/observable';
import { HttpInterceptor } from './httpinterceptor';

@Injectable()
export class TreePortfolioService {
  serviceUrl = 'https://prototypemora.eu-gb.mybluemix.net';
  //serviceUrl = 'http://9.199.240.210:8080';
 // serviceUrl ='http://9.199.224.202:8888';
 //serviceUrl ='http://9.199.41.247:8080';
  //serviceUrl= 'http://localhost:8080';
  constructor(private http: HttpInterceptor) {

  }

  public fetchRootPortfolio(): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    const url = this.serviceUrl + '/portfolio/getRootportfolio';
    console.log("Calling Root-Portfolio service "+ url);
    return this.http.get(url).map(this.extractReponseData);
  }

  public addChildPortfolio(requestJSON: string, parentId: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    
    const url = this.serviceUrl + '/portfolio/createSubPortfolio/' + parentId;
    console.log("********************** "+JSON.stringify(requestJSON));
    return this.http.put(url, requestJSON, opts).map(this.extractReponseData);
  }

  public editPortfolio(requestJSON: string, parentId: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    const url = this.serviceUrl + '/portfolio/editPortfolio/' + parentId;
    console.log(url);
    return this.http.put(url, requestJSON, opts).map(this.extractReponseData);
  }

  public getPortfolioById(requestJSON: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;
    
    const url = this.serviceUrl + '/portfolio/getPortfoliobyId/' + requestJSON;
    
    return this.http.get(url).map(this.extractReponseData);
  }
  public deactivatePortfolio(requestJSON: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    //headers.append('Access-Control-Allow-Origin', '*');

    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    const url = this.serviceUrl + '/portfolio/deactivatePortfolio/' + requestJSON;
    //const url = this.serviceUrl + '/portfolio/deactivatePortfolio/1';
    console.log(url);
    return this.http.get(url).map(this.extractReponseData);
  }
  public getActivatePortfolio(requestJSON: string): Observable<any> {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const opts: RequestOptions = new RequestOptions();
    opts.headers = headers;

    const url = this.serviceUrl + '/portfolio/activatePortfolio/' + requestJSON;
    return this.http.get(url).map(this.extractReponseData);
  }

  private extractReponseData(res: Response) {
    const body = res.json();
    return body;
  }

}
