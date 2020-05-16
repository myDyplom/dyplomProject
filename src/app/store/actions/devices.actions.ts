import { Action } from '@ngrx/store';

export enum EDevicesActions {
    GetDevices = '[Device] Get Devices',
    GetDevicesSuccess = '[Device] Get Devices Success',
    SelectDevice = '[Device] Select Device',
    GetDeviceInfo = '[Device] Get Device info',
    GetDeviceInfoSuccess = '[Device] Get Device info Success',
    UpdateDeviceInfo = '[Device] Update Device info',
    UpdateDeviceInfoSuccess = '[Device] Update Device info Success',
    ClearOldDevicesInfo = '[Device] Clear Devices Info',
    ShowError = '[Device] Show Error'
}

export class GetDevices implements Action {
    public readonly type = EDevicesActions.GetDevices;
    constructor(public id: any) { }
}

export class GetDevicesSuccess implements Action {
    public readonly type = EDevicesActions.GetDevicesSuccess;
    constructor(public payload: any) {}
}

export class SelectDevice implements Action {
    public readonly type = EDevicesActions.SelectDevice;
    constructor(public payload: any) {}
}

export class GetDeviceInfo implements Action {
    public readonly type = EDevicesActions.GetDeviceInfo;
    constructor(public device: any) {}
}

export class GetDeviceInfoSuccess implements Action {
    public readonly type = EDevicesActions.GetDeviceInfoSuccess;
    constructor(public payload: any | any) {}
}

export class UpdateDeviceInfo implements Action {
    public readonly type = EDevicesActions.UpdateDeviceInfo;
    constructor(public device: any, public parameters: any) {}
}

export class UpdateDeviceInfoSuccess implements Action {
    public readonly type = EDevicesActions.UpdateDeviceInfoSuccess;
    constructor(public payload: any) {}
}

export class ClearOldDevicesInfo implements Action {
    public readonly type = EDevicesActions.ClearOldDevicesInfo;
}

export class ShowError implements Action {
    public readonly type = EDevicesActions.ShowError;
    constructor(public err: string | null) {}
}


export type DevicesActions = GetDevices | GetDevicesSuccess
    | SelectDevice | GetDeviceInfo | GetDeviceInfoSuccess
    | UpdateDeviceInfo | UpdateDeviceInfoSuccess | ClearOldDevicesInfo
    | ShowError;
