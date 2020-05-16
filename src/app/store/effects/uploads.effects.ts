import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import {switchMap, mergeMap, catchError} from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
    GetUploadsSuccess,
    EUploadActions,
    GetUploads,
    SetUploadsCount
} from '../actions/uploads.actions';

import { FieldsUploadService } from '../../services/fields-upload.service';
import {ShowError} from '../actions/devices.actions';

@Injectable()
export class UploadEffects {

    @Effect()
    getUploads$ = this._actions$.pipe(
        ofType<GetUploads>(EUploadActions.GetUploads),
        switchMap((action) => this._uploadService.getFieldsUpload(action.payload)),
        mergeMap((uploadHttp: any) =>
            of(new GetUploadsSuccess(uploadHttp.items), new SetUploadsCount(uploadHttp.count))
        ),
        catchError(err => of( new ShowError(err.message))),
    );

    constructor(
        private _uploadService: FieldsUploadService,
        private _actions$: Actions,
        private _store: Store<IAppState>
    ) {}
}
