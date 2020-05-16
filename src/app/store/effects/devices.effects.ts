import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import {catchError, switchMap} from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
    EDevicesActions, GetDeviceInfo,
    GetDeviceInfoSuccess,
    GetDevices,
    GetDevicesSuccess, ShowError,
    UpdateDeviceInfo,
} from '../actions/devices.actions';
import {DevicesService} from '../../services/devices.service';


@Injectable()
export class DevicesEffects {
    @Effect()
    getDevices$ = this._actions$.pipe(
        ofType<GetDevices>(EDevicesActions.GetDevices),
        switchMap((action) => this._devicesService.getDevices(action.id)),
        switchMap((devices: any) => of(new GetDevicesSuccess(devices))),
        catchError(err => of( new ShowError(err.message))),
    );

    @Effect()
    getDeviceInfo$ = this._actions$.pipe(
        ofType<GetDeviceInfo>(EDevicesActions.GetDeviceInfo),
        switchMap((action) => this._devicesService.getDevice(action.device.id, action.device.type)),
        switchMap((device: any) => of(new GetDeviceInfoSuccess(device))),
        catchError(err => of( new ShowError(err.message))),
    );

    @Effect()
    updateDeviceInfo$ = this._actions$.pipe(
        ofType<UpdateDeviceInfo>(EDevicesActions.UpdateDeviceInfo),
        switchMap((action) => this._devicesService.updateDevice(action.device.id, action.device.type, action.parameters)),
        catchError(err => of(new GetDeviceInfoSuccess(err))),
    );

    constructor(
        private _devicesService: DevicesService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) {}
}
