import { RouterReducerState } from '@ngrx/router-store';

import { IDevicesState, initialDevicesState } from './devices.state';
import { IUploadsState, initialUploadsState } from './uploads.state';


export interface IAppState {
    router?: RouterReducerState;
    devices: IDevicesState;
    fieldsUploads: IUploadsState;
}

export const initialAppState: IAppState = {
    devices: initialDevicesState,
    fieldsUploads: initialUploadsState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
