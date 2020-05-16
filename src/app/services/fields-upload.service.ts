import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class FieldsUploadService {

    constructor(protected apiService: ApiService) {
    }

    getFieldsUpload(filter: any) {
        const params = new HttpParams()
            .set('page', String(filter.page))
            .set('size', String(filter.size));
        return this.apiService.post('/field_upload/get_all', filter.filterDetails, params);
    }
}
