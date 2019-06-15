/*!
 * Copyright 2018 Screencastify LLC
 */
/// <reference types="angular" />
export interface ExportMp3Params {
    driveFileId: string;
    fileName: string;
    driveFolderId: string;
}
export interface ExportMp3Result {
    taskId: string;
}
/**
 * Client for file export service implemented in castify-storage repo.
 */
export declare class ExportClientService {
    private $http;
    private _endpointUrl;
    constructor($http: ng.IHttpService, deployConfig: any);
    /**
     * Export audio of given file on users drive account as mp3.
     * Resulting file is saved back to users drive account into given folder.
     * @returns id of FbAudioTask which can be monitored
     */
    exportAudio(params: ExportMp3Params): Promise<ExportMp3Result>;
}
//# sourceMappingURL=export-client.service.d.ts.map