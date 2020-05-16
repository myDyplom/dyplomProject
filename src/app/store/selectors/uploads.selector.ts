import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IUploadsState } from '../state/uploads.state';

const selectUploads = (state: IAppState) => state.fieldsUploads;

export const uploadsList = createSelector(
    selectUploads,
    (state: IUploadsState) => state.uploads
);

export const uploadsCount = createSelector(
    selectUploads,
    (state: IUploadsState) => state.uploadsCount
);

export const selectedUpload = createSelector(
    selectUploads,
    (state: IUploadsState) => state.selectedUpload
);
