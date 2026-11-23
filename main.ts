// post-x-promote-make-your-own-bounty-01 entry (Node 22, standard library only).
//
// This program's single job is to pass POST.json to the grader: it reads
// POST.json from the repository root and writes the same bytes to the
// output directory. Nothing else happens here — the entry is the X post
// itself. The house reads the post from X (its photo, its text, and its
// replies + reposts + quotes) and scores that; nothing this file writes
// about the post is ever scored.
//
// POST.json names one post of our own on X that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own attached, make.fun or @makefunai and our play
// code in its text. Until Lince posts, POST.json holds a placeholder
// address (status id 0) that the gate refuses — swap in the real post URL
// before submitting.
//
// Local run, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Inside the grader these are /bot and /output; locally they are
// overridden with the repository directory and a scratch output dir.
const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(BOT_DIR, 'POST.json');
const targetPath = join(OUTPUT_DIR, 'POST.json');

let postBytes: Buffer;
try {
  postBytes = readFileSync(sourcePath);
} catch (err) {
  console.error(`could not read POST.json from ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

// The file must be a JSON object with a url string; anything else is not
// a post address and the gate would refuse it anyway, so fail loudly here
// instead of handing the grader a file it cannot use. The url is checked
// for shape only — whether the post exists, is public, and was made inside
// the bounty window is the house's reading, not this program's.
let post: unknown;
try {
  post = JSON.parse(postBytes.toString('utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof post !== 'object' ||
  post === null ||
  Array.isArray(post) ||
  typeof (post as { url?: unknown }).url !== 'string'
) {
  console.error('POST.json must be an object like {"url": "https://x.com/<handle>/status/<id>"}');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(targetPath, postBytes);
