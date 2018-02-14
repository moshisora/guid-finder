'use strict';

const fs = require('fs');
const path = require('path');

const searchGuid = (guid, dir) => {
    console.log('searching...');
    getReferences(guid, dir);
};

const getReferences = (guid, dir) => {
    dir = dir || '.';

    scanFiles(dir, (filePath) => {
        if (!isTargetExt(filePath)) {
            return;
        }
        if (isReferencedFile(filePath, guid)) {
            console.log(filePath);
        }
    }, function () {
        console.log('error');
    });
};

const scanFiles = (dirPath, fileCallback, errCallback) => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            errCallback(err);
            return;
        }

        files.forEach((file) => {
            let fp = path.join(dirPath, file);
            if (fs.statSync(fp).isDirectory()) {
                scanFiles(fp, fileCallback);
            } else {
                fileCallback(fp);
            }
        });
    });
};

const isTargetExt = (filePath) => {
    return filePath.match(/\.(unity|prefab)$/) != null;
};

const isReferencedFile = (filePath, guid) => {
    const regexp = new RegExp(guid);
    const content = fs.readFileSync(filePath, 'utf8');
    return content.match(regexp) != null;
};

module.exports = searchGuid;
