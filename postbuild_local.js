const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const unlink = promisify(fs.unlink);
const rmdir = promisify(fs.rmdir);
const rename = promisify(fs.rename);
const stat = promisify(fs.stat);

const buildPath = path.join(__dirname, 'build');
const storePath = path.join(__dirname, 'store');
const storeBuildPath = path.join(storePath, 'build');

const indexPath = path.join(__dirname, 'build', 'index.html');
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
                // TODO change this implamentation
                const result = data.replace(/n\.p="\/"/g, 'n.p=""');
                await writeFile(filePath, result, 'utf8');
            }
        }
    } catch (err) {
        console.log(err);
    }
}

async function moveBuildToStore() {
    try {
        // Check if store/build exists, delete if it does
        if (await stat(storeBuildPath).catch(() => false)) {
            await removeDirectory(storeBuildPath);
        }

        // Move build to store/build
        await rename(buildPath, storeBuildPath);
        console.log('Build directory moved successfully.');
    } catch (err) {
        console.log(err);
    }
}

async function removeDirectory(dir) {
    const files = await readdir(dir);
    await Promise.all(files.map(async (file) => {
        const p = path.join(dir, file);
        const fileStat = await stat(p);
        if (fileStat.isDirectory()) {
            await removeDirectory(p);
        } else {
            await unlink(p);
        }
    }));
    await rmdir(dir);
}

async function runPostBuild() {
    await modifyHTML();
    await modifyJavaScript(buildPath);
    await moveBuildToStore();
}

runPostBuild();
