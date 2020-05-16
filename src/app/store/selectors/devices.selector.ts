import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import {IDevicesState} from '../state/devices.state';

const selectDevicesState = (state: IAppState) => state.devices;


export const devices = createSelector(
    selectDevicesState,
    (state: IDevicesState) => state.devices
);

export const selectedDevice = createSelector(
    selectDevicesState,
    (state: IDevicesState) => state.selectedDevice
);

export const deviceInfo = createSelector(
    selectDevicesState,
    (state: IDevicesState) => state.deviceInfo
);

export const showError = createSelector(
    selectDevicesState,
    (state: IDevicesState) => state.error
);
