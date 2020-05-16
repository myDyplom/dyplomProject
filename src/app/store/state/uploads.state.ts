
export interface IUploadsState {
    uploads: any[];
    selectedUpload: any;
    uploadsCount: number;
    error: string;
}

export const initialUploadsState: IUploadsState = {
    uploads: null,
    selectedUpload: null,
    uploadsCount: 0,
    error: null
};
