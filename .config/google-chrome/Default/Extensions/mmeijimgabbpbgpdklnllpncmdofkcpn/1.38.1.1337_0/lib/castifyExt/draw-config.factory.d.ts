import { StartRecordingConfig } from './bg-record';
export interface DrawConfig {
    controlWebcam: boolean;
    embedWebcam: boolean;
    showToolbox: boolean;
    camSourceId: string;
    camPosition: 'bottomRight' | 'bottomLeft' | 'topRight' | 'topLeft';
    tool: 'pointer' | 'freehand' | 'eraser';
    webcamDisplay: 'pip' | 'embed';
    chromeCommands: any;
    pip?: boolean;
}
/**
 * an module for handing config.draw
 *
 * unfortunately we can't use `public async` yet
 * because jasmine version still doesn't support async await
 *
 * e.g. using `public setShortcuts = this.spawn.wrap(function*() {})`
 * instead of `public async setShortcuts() {}`
 */
export declare class DrawConfigService {
    private spawn;
    private optionalPermissions;
    private chromeCommands;
    private webrtc;
    /**
     * sets draw chrome commands
     */
    setShortcuts: (config: StartRecordingConfig) => Promise<void>;
    /**
     * decides whether castify draw should load
     */
    shouldUseCastifyDraw: (config: StartRecordingConfig) => Promise<boolean>;
    /**
     * If allows webcam in castify-draw, disables enbedding webcam
     */
    setControlWebcam: (config: StartRecordingConfig) => Promise<void>;
    constructor(spawn: any, optionalPermissions: any, chromeCommands: any, webrtc: any);
    /**
     * create castify-draw's config based on config settings.
     * HACK: currently mutates config.draw property if persent in config.
     */
    createFromConfig(config: StartRecordingConfig): DrawConfig;
    enablePiP(drawConfig: DrawConfig): void;
}
export declare class DrawConfigModule {
}
//# sourceMappingURL=draw-config.factory.d.ts.map