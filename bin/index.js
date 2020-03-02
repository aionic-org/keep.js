#!/usr/bin/env node

const os = require('os');
const fs = require('fs');
const path = require('path');
const editor = require('external-editor');

const folderName = 'keepjs';
const storagePath = path.resolve(os.homedir(), folderName);
const storageFile = path.resolve(storagePath, 'keepjs.txt');

// Create storage folder
if (!fs.existsSync(storagePath)) {
	fs.mkdirSync(storagePath);
}

// Create storage file
if (!fs.existsSync(storageFile)) {
	fs.writeFileSync(storageFile, '');
}

const fileContent = fs.readFileSync(storageFile, 'utf8');

try {
	const text = editor.edit(fileContent);
	fs.writeFileSync(storageFile, text);
} catch (err) {
	console.log(err);
}
