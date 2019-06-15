/*!
 * Copyright 2018 Screencastify LLC
 */
import * as ng from 'angular';
/**
 * Simple helper to allow to use Picture in Picture API
 * (https://wicg.github.io/picture-in-picture/)
 * from a background page.
 *
 * PiP mode can only be requested after:
 * - a video (including metadata) has already been loaded before
 * - in direct response to a user gesture
 *
 *
 */
export declare class PipService {
    private $log;
    private appOptions;
    private _video;
    isActive: boolean;
    private _stream;
    private readonly OPENING;
    private readonly CLOSING;
    private _state;
    private _drawConfig;
    constructor($log: ng.ILogService, appOptions: any);
    isSupported(): boolean;
    /**
     * get chrome version
     */
    private _getChromeVersion;
    shouldUse(stream: any): boolean;
    /**
     * Open PiP window (dummy content), call this in direct response to user events.
     * Rejects if opening a window failed.
     */
    open(): Promise<void>;
    /**
     * Better to have in hook, esp for when user manually closes pip
     */
    private _leavePipListener;
    private _stopVideo;
    /**
     * Close PiP window.
     */
    close(): void;
    /**
     * Play given video stream in PiP window
     */
    playVideoStream(stream: MediaStream): Promise<void>;
    drawConfig: any;
    stop(): void;
    /**
     * Load dummy video into page
     */
    load(): void;
}
export declare class PiPModule {
}
//# sourceMappingURL=pip.service.d.ts.map