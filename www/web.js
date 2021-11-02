(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["web"],{

/***/ "1HeV":
/*!**************************************************************!*\
  !*** ./node_modules/@capacitor/app-launcher/dist/esm/web.js ***!
  \**************************************************************/
/*! exports provided: AppLauncherWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppLauncherWeb", function() { return AppLauncherWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class AppLauncherWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async canOpenUrl(_options) {
        return { value: true };
    }
    async openUrl(options) {
        window.open(options.url, '_blank');
        return { completed: true };
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "B5q2":
/*!************************************************************!*\
  !*** ./node_modules/@capacitor/filesystem/dist/esm/web.js ***!
  \************************************************************/
/*! exports provided: FilesystemWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesystemWeb", function() { return FilesystemWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

function resolve(path) {
    const posix = path.split('/').filter(item => item !== '.');
    const newPosix = [];
    posix.forEach(item => {
        if (item === '..' &&
            newPosix.length > 0 &&
            newPosix[newPosix.length - 1] !== '..') {
            newPosix.pop();
        }
        else {
            newPosix.push(item);
        }
    });
    return newPosix.join('/');
}
function isPathParent(parent, children) {
    parent = resolve(parent);
    children = resolve(children);
    const pathsA = parent.split('/');
    const pathsB = children.split('/');
    return (parent !== children &&
        pathsA.every((value, index) => value === pathsB[index]));
}
class FilesystemWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super(...arguments);
        this.DB_VERSION = 1;
        this.DB_NAME = 'Disc';
        this._writeCmds = ['add', 'put', 'delete'];
    }
    async initDb() {
        if (this._db !== undefined) {
            return this._db;
        }
        if (!('indexedDB' in window)) {
            throw this.unavailable("This browser doesn't support IndexedDB");
        }
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.DB_NAME, this.DB_VERSION);
            request.onupgradeneeded = FilesystemWeb.doUpgrade;
            request.onsuccess = () => {
                this._db = request.result;
                resolve(request.result);
            };
            request.onerror = () => reject(request.error);
            request.onblocked = () => {
                console.warn('db blocked');
            };
        });
    }
    static doUpgrade(event) {
        const eventTarget = event.target;
        const db = eventTarget.result;
        switch (event.oldVersion) {
            case 0:
            case 1:
            default: {
                if (db.objectStoreNames.contains('FileStorage')) {
                    db.deleteObjectStore('FileStorage');
                }
                const store = db.createObjectStore('FileStorage', { keyPath: 'path' });
                store.createIndex('by_folder', 'folder');
            }
        }
    }
    async dbRequest(cmd, args) {
        const readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
        return this.initDb().then((conn) => {
            return new Promise((resolve, reject) => {
                const tx = conn.transaction(['FileStorage'], readFlag);
                const store = tx.objectStore('FileStorage');
                const req = store[cmd](...args);
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });
        });
    }
    async dbIndexRequest(indexName, cmd, args) {
        const readFlag = this._writeCmds.indexOf(cmd) !== -1 ? 'readwrite' : 'readonly';
        return this.initDb().then((conn) => {
            return new Promise((resolve, reject) => {
                const tx = conn.transaction(['FileStorage'], readFlag);
                const store = tx.objectStore('FileStorage');
                const index = store.index(indexName);
                const req = index[cmd](...args);
                req.onsuccess = () => resolve(req.result);
                req.onerror = () => reject(req.error);
            });
        });
    }
    getPath(directory, uriPath) {
        const cleanedUriPath = uriPath !== undefined ? uriPath.replace(/^[/]+|[/]+$/g, '') : '';
        let fsPath = '';
        if (directory !== undefined)
            fsPath += '/' + directory;
        if (uriPath !== '')
            fsPath += '/' + cleanedUriPath;
        return fsPath;
    }
    async clear() {
        const conn = await this.initDb();
        const tx = conn.transaction(['FileStorage'], 'readwrite');
        const store = tx.objectStore('FileStorage');
        store.clear();
    }
    /**
     * Read a file from disk
     * @param options options for the file read
     * @return a promise that resolves with the read file data result
     */
    async readFile(options) {
        const path = this.getPath(options.directory, options.path);
        // const encoding = options.encoding;
        const entry = (await this.dbRequest('get', [path]));
        if (entry === undefined)
            throw Error('File does not exist.');
        return { data: entry.content ? entry.content : '' };
    }
    /**
     * Write a file to disk in the specified location on device
     * @param options options for the file write
     * @return a promise that resolves with the file write result
     */
    async writeFile(options) {
        const path = this.getPath(options.directory, options.path);
        const data = options.data;
        const doRecursive = options.recursive;
        const occupiedEntry = (await this.dbRequest('get', [path]));
        if (occupiedEntry && occupiedEntry.type === 'directory')
            throw 'The supplied path is a directory.';
        const encoding = options.encoding;
        const parentPath = path.substr(0, path.lastIndexOf('/'));
        const parentEntry = (await this.dbRequest('get', [parentPath]));
        if (parentEntry === undefined) {
            const subDirIndex = parentPath.indexOf('/', 1);
            if (subDirIndex !== -1) {
                const parentArgPath = parentPath.substr(subDirIndex);
                await this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: doRecursive,
                });
            }
        }
        const now = Date.now();
        const pathObj = {
            path: path,
            folder: parentPath,
            type: 'file',
            size: data.length,
            ctime: now,
            mtime: now,
            content: !encoding && data.indexOf(',') >= 0 ? data.split(',')[1] : data,
        };
        await this.dbRequest('put', [pathObj]);
        return {
            uri: pathObj.path,
        };
    }
    /**
     * Append to a file on disk in the specified location on device
     * @param options options for the file append
     * @return a promise that resolves with the file write result
     */
    async appendFile(options) {
        const path = this.getPath(options.directory, options.path);
        let data = options.data;
        // const encoding = options.encoding;
        const parentPath = path.substr(0, path.lastIndexOf('/'));
        const now = Date.now();
        let ctime = now;
        const occupiedEntry = (await this.dbRequest('get', [path]));
        if (occupiedEntry && occupiedEntry.type === 'directory')
            throw 'The supplied path is a directory.';
        const parentEntry = (await this.dbRequest('get', [parentPath]));
        if (parentEntry === undefined) {
            const subDirIndex = parentPath.indexOf('/', 1);
            if (subDirIndex !== -1) {
                const parentArgPath = parentPath.substr(subDirIndex);
                await this.mkdir({
                    path: parentArgPath,
                    directory: options.directory,
                    recursive: true,
                });
            }
        }
        if (occupiedEntry !== undefined) {
            data = occupiedEntry.content + data;
            ctime = occupiedEntry.ctime;
        }
        const pathObj = {
            path: path,
            folder: parentPath,
            type: 'file',
            size: data.length,
            ctime: ctime,
            mtime: now,
            content: data,
        };
        await this.dbRequest('put', [pathObj]);
    }
    /**
     * Delete a file from disk
     * @param options options for the file delete
     * @return a promise that resolves with the deleted file data result
     */
    async deleteFile(options) {
        const path = this.getPath(options.directory, options.path);
        const entry = (await this.dbRequest('get', [path]));
        if (entry === undefined)
            throw Error('File does not exist.');
        const entries = await this.dbIndexRequest('by_folder', 'getAllKeys', [
            IDBKeyRange.only(path),
        ]);
        if (entries.length !== 0)
            throw Error('Folder is not empty.');
        await this.dbRequest('delete', [path]);
    }
    /**
     * Create a directory.
     * @param options options for the mkdir
     * @return a promise that resolves with the mkdir result
     */
    async mkdir(options) {
        const path = this.getPath(options.directory, options.path);
        const doRecursive = options.recursive;
        const parentPath = path.substr(0, path.lastIndexOf('/'));
        const depth = (path.match(/\//g) || []).length;
        const parentEntry = (await this.dbRequest('get', [parentPath]));
        const occupiedEntry = (await this.dbRequest('get', [path]));
        if (depth === 1)
            throw Error('Cannot create Root directory');
        if (occupiedEntry !== undefined)
            throw Error('Current directory does already exist.');
        if (!doRecursive && depth !== 2 && parentEntry === undefined)
            throw Error('Parent directory must exist');
        if (doRecursive && depth !== 2 && parentEntry === undefined) {
            const parentArgPath = parentPath.substr(parentPath.indexOf('/', 1));
            await this.mkdir({
                path: parentArgPath,
                directory: options.directory,
                recursive: doRecursive,
            });
        }
        const now = Date.now();
        const pathObj = {
            path: path,
            folder: parentPath,
            type: 'directory',
            size: 0,
            ctime: now,
            mtime: now,
        };
        await this.dbRequest('put', [pathObj]);
    }
    /**
     * Remove a directory
     * @param options the options for the directory remove
     */
    async rmdir(options) {
        const { path, directory, recursive } = options;
        const fullPath = this.getPath(directory, path);
        const entry = (await this.dbRequest('get', [fullPath]));
        if (entry === undefined)
            throw Error('Folder does not exist.');
        if (entry.type !== 'directory')
            throw Error('Requested path is not a directory');
        const readDirResult = await this.readdir({ path, directory });
        if (readDirResult.files.length !== 0 && !recursive)
            throw Error('Folder is not empty');
        for (const entry of readDirResult.files) {
            const entryPath = `${path}/${entry}`;
            const entryObj = await this.stat({ path: entryPath, directory });
            if (entryObj.type === 'file') {
                await this.deleteFile({ path: entryPath, directory });
            }
            else {
                await this.rmdir({ path: entryPath, directory, recursive });
            }
        }
        await this.dbRequest('delete', [fullPath]);
    }
    /**
     * Return a list of files from the directory (not recursive)
     * @param options the options for the readdir operation
     * @return a promise that resolves with the readdir directory listing result
     */
    async readdir(options) {
        const path = this.getPath(options.directory, options.path);
        const entry = (await this.dbRequest('get', [path]));
        if (options.path !== '' && entry === undefined)
            throw Error('Folder does not exist.');
        const entries = await this.dbIndexRequest('by_folder', 'getAllKeys', [IDBKeyRange.only(path)]);
        const names = entries.map(e => {
            return e.substring(path.length + 1);
        });
        return { files: names };
    }
    /**
     * Return full File URI for a path and directory
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    async getUri(options) {
        const path = this.getPath(options.directory, options.path);
        let entry = (await this.dbRequest('get', [path]));
        if (entry === undefined) {
            entry = (await this.dbRequest('get', [path + '/']));
        }
        return {
            uri: (entry === null || entry === void 0 ? void 0 : entry.path) || path,
        };
    }
    /**
     * Return data about a file
     * @param options the options for the stat operation
     * @return a promise that resolves with the file stat result
     */
    async stat(options) {
        const path = this.getPath(options.directory, options.path);
        let entry = (await this.dbRequest('get', [path]));
        if (entry === undefined) {
            entry = (await this.dbRequest('get', [path + '/']));
        }
        if (entry === undefined)
            throw Error('Entry does not exist.');
        return {
            type: entry.type,
            size: entry.size,
            ctime: entry.ctime,
            mtime: entry.mtime,
            uri: entry.path,
        };
    }
    /**
     * Rename a file or directory
     * @param options the options for the rename operation
     * @return a promise that resolves with the rename result
     */
    async rename(options) {
        return this._copy(options, true);
    }
    /**
     * Copy a file or directory
     * @param options the options for the copy operation
     * @return a promise that resolves with the copy result
     */
    async copy(options) {
        return this._copy(options, false);
    }
    async requestPermissions() {
        return { publicStorage: 'granted' };
    }
    async checkPermissions() {
        return { publicStorage: 'granted' };
    }
    /**
     * Function that can perform a copy or a rename
     * @param options the options for the rename operation
     * @param doRename whether to perform a rename or copy operation
     * @return a promise that resolves with the result
     */
    async _copy(options, doRename = false) {
        let { toDirectory } = options;
        const { to, from, directory: fromDirectory } = options;
        if (!to || !from) {
            throw Error('Both to and from must be provided');
        }
        // If no "to" directory is provided, use the "from" directory
        if (!toDirectory) {
            toDirectory = fromDirectory;
        }
        const fromPath = this.getPath(fromDirectory, from);
        const toPath = this.getPath(toDirectory, to);
        // Test that the "to" and "from" locations are different
        if (fromPath === toPath) {
            return;
        }
        if (isPathParent(fromPath, toPath)) {
            throw Error('To path cannot contain the from path');
        }
        // Check the state of the "to" location
        let toObj;
        try {
            toObj = await this.stat({
                path: to,
                directory: toDirectory,
            });
        }
        catch (e) {
            // To location does not exist, ensure the directory containing "to" location exists and is a directory
            const toPathComponents = to.split('/');
            toPathComponents.pop();
            const toPath = toPathComponents.join('/');
            // Check the containing directory of the "to" location exists
            if (toPathComponents.length > 0) {
                const toParentDirectory = await this.stat({
                    path: toPath,
                    directory: toDirectory,
                });
                if (toParentDirectory.type !== 'directory') {
                    throw new Error('Parent directory of the to path is a file');
                }
            }
        }
        // Cannot overwrite a directory
        if (toObj && toObj.type === 'directory') {
            throw new Error('Cannot overwrite a directory with a file');
        }
        // Ensure the "from" object exists
        const fromObj = await this.stat({
            path: from,
            directory: fromDirectory,
        });
        // Set the mtime/ctime of the supplied path
        const updateTime = async (path, ctime, mtime) => {
            const fullPath = this.getPath(toDirectory, path);
            const entry = (await this.dbRequest('get', [fullPath]));
            entry.ctime = ctime;
            entry.mtime = mtime;
            await this.dbRequest('put', [entry]);
        };
        const ctime = fromObj.ctime ? fromObj.ctime : Date.now();
        switch (fromObj.type) {
            // The "from" object is a file
            case 'file': {
                // Read the file
                const file = await this.readFile({
                    path: from,
                    directory: fromDirectory,
                });
                // Optionally remove the file
                if (doRename) {
                    await this.deleteFile({
                        path: from,
                        directory: fromDirectory,
                    });
                }
                // Write the file to the new location
                await this.writeFile({
                    path: to,
                    directory: toDirectory,
                    data: file.data,
                });
                // Copy the mtime/ctime of a renamed file
                if (doRename) {
                    await updateTime(to, ctime, fromObj.mtime);
                }
                // Resolve promise
                return;
            }
            case 'directory': {
                if (toObj) {
                    throw Error('Cannot move a directory over an existing object');
                }
                try {
                    // Create the to directory
                    await this.mkdir({
                        path: to,
                        directory: toDirectory,
                        recursive: false,
                    });
                    // Copy the mtime/ctime of a renamed directory
                    if (doRename) {
                        await updateTime(to, ctime, fromObj.mtime);
                    }
                }
                catch (e) {
                    // ignore
                }
                // Iterate over the contents of the from location
                const contents = (await this.readdir({
                    path: from,
                    directory: fromDirectory,
                })).files;
                for (const filename of contents) {
                    // Move item from the from directory to the to directory
                    await this._copy({
                        from: `${from}/${filename}`,
                        to: `${to}/${filename}`,
                        directory: fromDirectory,
                        toDirectory,
                    }, doRename);
                }
                // Optionally remove the original from directory
                if (doRename) {
                    await this.rmdir({
                        path: from,
                        directory: fromDirectory,
                    });
                }
            }
        }
    }
}
FilesystemWeb._debug = true;
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "fOPH":
/*!*********************************************************!*\
  !*** ./node_modules/@capacitor/browser/dist/esm/web.js ***!
  \*********************************************************/
/*! exports provided: BrowserWeb, Browser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWeb", function() { return BrowserWeb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Browser", function() { return Browser; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class BrowserWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super();
        this._lastWindow = null;
    }
    async open(options) {
        this._lastWindow = window.open(options.url, options.windowName || '_blank');
    }
    async close() {
        return new Promise((resolve, reject) => {
            if (this._lastWindow != null) {
                this._lastWindow.close();
                this._lastWindow = null;
                resolve();
            }
            else {
                reject('No active window to close!');
            }
        });
    }
}
const Browser = new BrowserWeb();

//# sourceMappingURL=web.js.map

/***/ }),

/***/ "mxtL":
/*!*******************************************************!*\
  !*** ./node_modules/@capacitor/share/dist/esm/web.js ***!
  \*******************************************************/
/*! exports provided: ShareWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareWeb", function() { return ShareWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class ShareWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async share(options) {
        if (typeof navigator === 'undefined' || !navigator.share) {
            throw this.unavailable('Share API not available in this browser');
        }
        await navigator.share({
            title: options.title,
            text: options.text,
            url: options.url,
        });
        return {};
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "p3nu":
/*!*****************************************************!*\
  !*** ./node_modules/@capacitor/app/dist/esm/web.js ***!
  \*****************************************************/
/*! exports provided: AppWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppWeb", function() { return AppWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class AppWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    constructor() {
        super();
        this.handleVisibilityChange = () => {
            const data = {
                isActive: document.hidden !== true,
            };
            this.notifyListeners('appStateChange', data);
        };
        document.addEventListener('visibilitychange', this.handleVisibilityChange, false);
    }
    exitApp() {
        throw this.unimplemented('Not implemented on web.');
    }
    async getInfo() {
        throw this.unimplemented('Not implemented on web.');
    }
    async getLaunchUrl() {
        return { url: '' };
    }
    async getState() {
        return { isActive: document.hidden !== true };
    }
}
//# sourceMappingURL=web.js.map

/***/ }),

/***/ "qluZ":
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/splash-screen/dist/esm/web.js ***!
  \***************************************************************/
/*! exports provided: SplashScreenWeb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenWeb", function() { return SplashScreenWeb; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");

class SplashScreenWeb extends _capacitor_core__WEBPACK_IMPORTED_MODULE_0__["WebPlugin"] {
    async show(_options) {
        return undefined;
    }
    async hide(_options) {
        return undefined;
    }
}
//# sourceMappingURL=web.js.map

/***/ })

}]);
//# sourceMappingURL=web.js.map