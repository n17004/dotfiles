/*!
 * Copyright 2018 Screencastify LLC
 */
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
/**
 * Quick and direty hack to get rollout percentages from firebase db
 */
export declare class FbFeatureRolloutModel {
    static readonly ROOT_REF = "/featureRollout";
    static _ref(): firebase.database.Reference;
    /**
     * Fetch current feature rollout percentages
     * @returns Promise resolving
     * with object mapping appConfig keys mapping to rollout percentage values.
     */
    static get(): Promise<{}>;
}
declare abstract class FbTaskModel {
    driveInfo: any;
    /**
     * Simple quivalent to FbDrivePublishTaskModel.onProgress. In contrast to
     * FbTaskModel Only uses a single db watcher for easier listener
     * setup/teardown without rxjs dependency.
     * Auto-populates the task result (driveInfo) into this.driveInfo before firing complete.
     * @param obs rxjs/tc39 observer called that yields progress
     * on progress updates, completes when task completed and erros when task
     * failed.
     */
    onProgress(): Observable<number>;
    abstract _ref(): firebase.database.Reference;
}
export declare class FbDrivePublishTaskModel extends FbTaskModel {
    id: string;
    static readonly ROOT_REF = "/drivePublishTasks";
    static getById(id: any): FbDrivePublishTaskModel;
    constructor(id: string);
    _ref(): firebase.database.Reference;
}
export declare class FbAudioExportTaskModel extends FbTaskModel {
    id: string;
    static readonly ROOT_REF = "/audioExportTasks";
    static getById(id: string): FbAudioExportTaskModel;
    constructor(id: string);
    _ref(): firebase.database.Reference;
}
export {};
//# sourceMappingURL=fb-models.d.ts.map