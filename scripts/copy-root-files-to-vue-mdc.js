import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

/**
 * @type {Array<string>}
 */
const files = [
    'LICENSES',
    'LICENSE',
    'READMD.md',
]

/**
 * @param {string} sourcePath
 * @param {string} destinationPath
 */
async function copySingleFile(sourcePath, destinationPath) {
  try {
    const destDir = path.dirname(destinationPath);
    await fs.mkdir(destDir, { recursive: true });
    await fs.copyFile(sourcePath, destinationPath);
    console.log(`Copied: ${sourcePath} -> ${destinationPath}`);
  } catch (error) {
    console.error(`Error ${sourcePath}:`, error);
    throw error;
  }
}

/**
 * @param {string} sourceDir
 * @param {string} destinationDir
 */
async function copyDirectoryRecursive(sourceDir, destinationDir) {
  try {
    await fs.mkdir(destinationDir, { recursive: true });
    console.log(`Target do not exist: ${destinationDir}`);
    const entries = await fs.readdir(sourceDir, { withFileTypes: true });

    for (let entry of entries) {
      const sourcePath = path.join(sourceDir, entry.name);
      const destinationPath = path.join(destinationDir, entry.name);

      if (entry.isDirectory()) {
        await copyDirectoryRecursive(sourcePath, destinationPath);
      } else if (entry.isFile()) {
        await copySingleFile(sourcePath, destinationPath);
      }
    }
    console.log(`Copied: ${sourceDir} -> ${destinationDir}`);
  } catch (error) {
    console.error(`Error ${sourceDir}:`, error);
    throw error;
  }
}

/**
 * @param {string} source
 * @param {string} destination
 */
export async function copy(source, destination) {
  try {
    const stats = await fs.stat(source);
    if (stats.isFile()) {
      await copySingleFile(source, destination);
    } else if (stats.isDirectory()) {
      await copyDirectoryRecursive(source, destination);
    } else {
      throw new Error(`${source} is not a file or a folder.`);
    }
  } catch (error) {
    console.error(`Error ${source}, from: ${destination}):`, error);
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename).replace('scripts', '');

async function main() {
    await copy('./README.md', './packages/vue-mdc/README.md');
    await copy('./LICENSE', './packages/vue-mdc/LICENSE');
    await copy('./LICENSES', './packages/vue-mdc/LICENSES');
}

main();
