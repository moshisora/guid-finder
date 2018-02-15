'use strict';

const fs = require('fs');
const path = require('path');

module.exports = class GuidFinder {
    constructor() {
    }

    getReferences(guid, dir) {
        console.log('searching...');
        dir = dir || '.';

        this.scanFiles(dir, (filePath) => {
            if (!this.isTargetExt(filePath)) {
                return;
            }
            if (this.isReferencedFile(filePath, guid)) {
                console.log(filePath);
            }
        }, () => {
            console.log('error');
        });
    };

    scanFiles(dirPath, fileCallback, errCallback) {
        return fs.readdir(dirPath, (err, files) => {
            if (err) {
                errCallback(err);
                return;
            }

            files.forEach((file) => {
                let fp = path.join(dirPath, file);
                if (fs.statSync(fp).isDirectory()) {
                    this.scanFiles(fp, fileCallback);
                } else {
                    fileCallback(fp);
                }
            });
        });
    };

    isTargetExt(filePath) {
        return filePath.match(/\.(unity|prefab)$/) != null;
    };

    isReferencedFile(filePath, guid) {
        const regexp = new RegExp(guid);
        const content = fs.readFileSync(filePath, 'utf8');
        return content.match(regexp) != null;
    };
}
