#!/usr/bin/env node

import { createHash } from 'crypto';
import { readFileSync } from 'fs';
import { resolve } from 'path';

const filePath = process.argv[2];

if (!filePath) {
  console.error('Usage: node sri-generator.js <file-path>');
  process.exit(1);
}

try {
  const absolutePath = resolve(filePath);
  const fileContents = readFileSync(absolutePath);

  const hash = createHash('sha256').update(fileContents).digest('base64');

  const integrity = `sha256-${hash}`;

  console.log(`File: ${filePath}`);
  console.log(`Integrity: ${integrity}`);
  console.log('');
  console.log('Usage in HTML:');
  console.log(`<link rel="modulepreload" href="..." integrity="${integrity}" />`);
  console.log(`or`);
  console.log(`<script type="module" src="..." integrity="${integrity}" crossorigin="anonymous"></script>`);
} catch (error) {
  console.error('Error generating SRI hash:', error);
  process.exit(1);
}
