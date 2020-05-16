export interface IDevicesState {
    devices: any;
    selectedDevice: any;
    deviceInfo: any
    error: string;
}

export const initialDevicesState: IDevicesState = {
    devices: null,
    selectedDevice: null,
    deviceInfo: null,
    error: null
};
