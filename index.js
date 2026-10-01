#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function init() {
  // 1. Get the project name from the terminal argument (e.g., 'npm create dimono my-app')
  const targetDir = process.argv[2] || 'dimono-project';
  const projectRoot = path.join(process.cwd(), targetDir);

  console.log(`\nCreating a new Dimono app in ${projectRoot}...`);

  // 2. Create the target directory
  if (!fs.existsSync(projectRoot)) {
    fs.mkdirSync(projectRoot, { recursive: true });
  }

  // 3. Copy files from your internal template folder to the user's new directory
  const templateDir = path.join(__dirname, 'template');
  
  function copyDir(src, dest) {
    fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      const srcFile = path.join(src, file);
      const destFile = path.join(dest, file);
      if (fs.statSync(srcFile).isDirectory()) {
        copyDir(srcFile, destFile);
      } else {
        fs.copyFileSync(srcFile, destFile);
      }
    }
  }

  copyDir(templateDir, projectRoot);

  // 4. Provide friendly success instructions
  console.log(`\nSuccess! Done in ${targetDir}. Next steps:`);
  console.log(`  cd ${targetDir}`);
  console.log(`  npm install`);
  console.log(`  npm run dev\n`);
}

init().catch((e) => {
  console.error(e);
});
