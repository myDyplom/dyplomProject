import { Injectable } from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
    providedIn: 'root'
})
export class DevicesService {

    constructor(protected apiService: ApiService) {
    }

    getDevices(id) {
        return this.apiService.get('/field_upload/' + id);
    }

    getDevice(id, type) {
        return this.apiService.get('/device/' + id + '/' + type);
    }

    updateDevice(id, type, parameters) {
        return this.apiService.put('/device/' + id + '/' + type, parameters);
    }

    urlPreview(url) {
        return this.apiService.post('/urlPreview', url);
    }

}
