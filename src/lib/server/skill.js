import { readFile } from 'fs/promises';

export async function loadSkills() {
  const content = await readFile('data/skills.json', { encoding: 'utf-8' });
  return JSON.parse(content);
}
