/*!
 * Copyright 2018 Screencastify LLC
 */
import * as ng from 'angular';
import 'angularfire';
/**
 * Simple service that watches castifyAuth for sign-in state changes and authorizes
 * firebase auth with the same user on authentication. Used for castify-storage (instant upload)
 */
export declare class BgFirebaseAuthFactory {
    private spawn;
    private $log;
    private firebase;
    private promiseTool;
    private castifyAuth;
    private $rootScope;
    private $firebaseAuth;
    private bgUserAccount;
    private _firebaseAuth;
    private _accessToken;
    user: any;
    /**
     * If user is signed in with castifyAuth, sign him in to firebase with the
     * google access token as well. If he signed out, sign him out of firebase
     * as well.
     * Note that firebase sign-in is not immediate, so it is not
     * exactly in sync / lags behind the castifyAuth a bit. So services that
     * depend on castify auth should not assume that. We could fire a separate
     * auth event here, if needed.
     * Note: we wrap this in a serializer to prevent concurrent executions.
     * Concurrent signInWithCredential executions created duplicate firebase
     * auth users.
     */
    private updateFirebaseAuth;
    /** Syncs castify-storage user to app user
     *  sometimes firebase auto signs users out
     */
    resync: any;
    /**
     * Sign user into firebase
     */
    private signInStorageUser;
    /**
     * Sign user out of firebase
     */
    private signoutStorageUser;
    /**
     * Sync google primary email if google primary email changed,
     * update fb user record to use new email as primary.
     */
    private syncEmail;
    install: any;
    constructor(spawn: any, $log: ng.ILogService, firebase: any, promiseTool: any, castifyAuth: any, $rootScope: ng.IRootScopeService, $firebaseAuth: AngularFireAuth, bgUserAccount: any);
    /**
     * Listens to firebase auth status. If firebase auto signed out, resync.
     */
    private addFirebaseAuthListener;
    /**
   * Get UserInfo (https://firebase.google.com/docs/reference/admin/node/admin.auth.UserInfo)
   * for google auth provider of given user. Returns null if none is persent.
   */
    private getGoogleUserData;
}
export declare class BgFirebaseAuthModule {
}
//# sourceMappingURL=bg-firebase-auth.d.ts.map