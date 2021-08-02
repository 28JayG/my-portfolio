import { foldersActionTypes } from "./folders.types";

export const setOpenFolder = (folderID: any) => ({
    type: foldersActionTypes.SET_OPEN_FOLDER,
    payload: folderID,
})