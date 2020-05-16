import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { devicesReducers } from './devices.reducers';
import { uploadsReducers } from './uploads.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    devices: devicesReducers,
    fieldsUploads: uploadsReducers
};
