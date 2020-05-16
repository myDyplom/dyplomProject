import {IDevicesState, initialDevicesState} from '../state/devices.state';
import {DevicesActions, EDevicesActions} from '../actions/devices.actions';

export function devicesReducers(state = initialDevicesState, action: DevicesActions): IDevicesState {
    switch (action.type) {
        case EDevicesActions.GetDevicesSuccess: {
            return {
                ...state,
                devices: action.payload,
                error: ''
            };
        }
        case EDevicesActions.SelectDevice: {
            return {
                ...state,
                selectedDevice: action.payload,
                error: ''
            };
        }
        case EDevicesActions.GetDeviceInfoSuccess: {
            return {
                ...state,
                deviceInfo: action.payload,
            };
        }
        case EDevicesActions.ClearOldDevicesInfo: {
            return {
                ...state,
                devices: null,
            };
        }
        case EDevicesActions.ShowError: {
            return {
                ...state,
                error: action.err
            };
        }
        default:
            return state;
    }
}
