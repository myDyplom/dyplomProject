import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {publishLast, refCount} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    token: string;

    currentUser: any;

    loading = false;

    // apiUrl = 'https://devapps.integrelsolutions.com:8000/api';
    // apiUrl = 'http://0.0.0.0:5000/api';
    apiUrl = 'http://localhost:7000';

    constructor(
        private http: HttpClient
    ) {}

    setHeaders(headerType, authenticate): any {
        // const versionName = appversion.getVersionNameSync();
        const headersConf = {};
        if (headerType === 'json') {
            headersConf['Content-Type'] = 'application/json';
        } else if (headerType === 'json-x') {
            headersConf['Content-Type'] = 'application/json';
        } else if (headerType === 'form') {
            headersConf['Content-Type'] = 'application/x-www-form-urlencoded';
        } else if (headerType === 'multipart') {
            headersConf['Content-Type'] = 'multipart/form-data';
        } else if (headerType === 'masterDataObtained') {
            const masterDataObtained =  '1900-01-01';
            headersConf['If-Modified-Since'] = masterDataObtained;
        }

        // Authorization
        /*if (authenticate && this.token) {
            headersConf.Authorization = `Token ${this.token}`;
        }*/

        return new HttpHeaders(headersConf);
    }

    get(path: string, params = {}, headerType: string = 'json', authenticate: boolean = false): Observable<any> {
        const headers =  this.setHeaders(headerType, authenticate);
        return this.http.get(this.apiUrl + path, { headers })
            .pipe(
                publishLast(),
                refCount()
            );
    }

    patch(path: string, headerType: string = 'json', authenticate: boolean = false): Observable<any> {
        const headers =  this.setHeaders(headerType, authenticate);
        return this.http.patch(this.apiUrl + path, {}, { headers })
            .pipe(
                publishLast(),
                refCount()
            );
    }

    post(path: string, body, params = {}, headerType: string = 'json', authenticate: boolean = false): Observable<any> {
        const headers =  this.setHeaders(headerType, authenticate);
        return this.http.post(this.apiUrl + path, body, { headers, params })
            .pipe(
                publishLast(),
                refCount()
            );
    }

    put(path: string, body, params = {}, headerType: string = 'json', authenticate: boolean = false): Observable<any> {
        const headers =  this.setHeaders(headerType, authenticate);
        return this.http.put(this.apiUrl + path, body, { headers })
            .pipe(
                publishLast(),
                refCount()
            );
    }

    delete(path: string, body: any = {}, params = {}, headerType: string = 'json', authenticate: boolean = false): Observable<any> {
        const headers =  this.setHeaders(headerType, authenticate);
        return this.http.delete(this.apiUrl + path, { headers })
            .pipe(
                publishLast(),
                refCount()
            );
    }

    // https://blog.angular-university.io/angular-2-rxjs-common-pitfalls/
}

