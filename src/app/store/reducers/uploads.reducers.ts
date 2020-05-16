import {initialUploadsState, IUploadsState} from '../state/uploads.state';
import {EUploadActions, UploadActions} from '../actions/uploads.actions';

export function uploadsReducers(state = initialUploadsState, action: UploadActions): IUploadsState {
    switch (action.type) {
        case EUploadActions.GetUploadsSuccess: {
            return {
                ...state,
                uploads: action.payload,
            };
        }
        case EUploadActions.SetUploadsCount: {
            return {
                ...state,
                uploadsCount: action.payload,
            };
        }
        case EUploadActions.SelectUpload: {
            return {
                ...state,
                selectedUpload: action.payload,
            };
        }
        default:
            return state;
    }
}

