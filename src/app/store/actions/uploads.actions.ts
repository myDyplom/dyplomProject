import { Action } from '@ngrx/store';


export enum EUploadActions {
    GetUploads = '[FieldUpload] Get FieldUploads',
    GetUploadsSuccess = '[FieldUpload] Get FieldUploads Success',
    SelectUpload = '[FieldUpload] select FieldUpload',
    SetUploadsCount = '[FieldUpload] Set uploads count',
}

export class GetUploads implements Action {
    public readonly type = EUploadActions.GetUploads;
    constructor(public payload: any) { }
}

export class GetUploadsSuccess implements Action {
    public readonly type = EUploadActions.GetUploadsSuccess;
    constructor(public payload: any[]) {}
}

export class SetUploadsCount implements Action {
    public readonly type = EUploadActions.SetUploadsCount;
    constructor(public payload: number) {}
}

export class SelectUpload implements Action {
    public readonly type = EUploadActions.SelectUpload;
    constructor(public payload: any) {}
}

export type UploadActions = GetUploads | GetUploadsSuccess | SelectUpload | SetUploadsCount;

