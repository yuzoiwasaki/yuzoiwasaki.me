import { readFile } from 'fs/promises';

export async function loadTalks() {
  const content = await readFile('data/talks.json', { encoding: 'utf-8' });
  return JSON.parse(content);
}
