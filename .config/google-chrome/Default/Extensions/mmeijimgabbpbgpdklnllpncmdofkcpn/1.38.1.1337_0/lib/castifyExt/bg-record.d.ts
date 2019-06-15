import { DrawConfig } from './draw-config.factory';
import './pip/pip.service';
/**
 * Options for bgRecord.start()
 */
export declare class StartRecordingConfig {
    /**
     * - desktop:  show window + screen picker
     * - screen: only allow to record entire screen
     * - cam: record webcam only
     */
    captureSource: 'desktop' | 'cam' | 'screen' | 'tab';
    encoder: 'webrtc' | 'nacl' | null;
    draw: DrawConfig;
    /**
     * Enable webcam embedding. Shows PiP window
     */
    embedWebcam: boolean;
    [x: string]: any;
    /**
     * Optional webrtc 'sourceId' constrain to identify which webcam to use. See
     * (https://dev.w3.org/2011/webrtc/editor/archives/20140619/getusermedia.html#widl-MediaTrackConstraintSet-sourceId)
     */
    camSourceId?: string;
    constructor(obj: Partial<StartRecordingConfig>);
    /**
     * Check if capturing entire screen or a window
     */
    isWindowOrScreenCapturing(): boolean;
}
//# sourceMappingURL=bg-record.d.ts.map