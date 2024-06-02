const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const buildPath = path.join(__dirname, 'build');

async function modifyHTML() {
    try {
        const data = await readFile(path.join(buildPath, 'index.html'), 'utf8');
        let result = data.replace(/<script defer="defer" src="\/(static\/js\/.*?\.js)"><\/script>/g, (match, p1) => {
            return `<script defer="defer" src="${p1.trim()}"></script>`;
        }).replace(/<link href="\/(static\/css\/.*?\.css)" rel="stylesheet">/g, (match, p1) => {
            return `<link href="${p1.trim()}" rel="stylesheet">`;
        });
        await writeFile(path.join(buildPath, 'index.html'), result, 'utf8');
    } catch (err) {
        console.log(err);
    }
}

async function modifyJavaScript(dir) {
    try {
        const files = await readdir(dir, { withFileTypes: true });
        for (const file of files) {
            const filePath = path.join(dir, file.name);
            if (file.isDirectory()) {
                await modifyJavaScript(filePath);
            } else if (file.name.endsWith('.js')) {
                const data = await readFile(filePath, 'utf8');
                const result = data.replace(/t\.p="\/"/g, 't.p=""');
                await writeFile(filePath, result, 'utf8');
            }
        }
    } catch (err) {
        console.log(err);
    }
}

async function runPostBuild() {
    await modifyHTML();
    await modifyJavaScript(buildPath);
}

runPostBuild();
