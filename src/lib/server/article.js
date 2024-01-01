import { readFile } from 'fs/promises';

export async function loadArticles() {
  const content = await readFile('data/articles.json', { encoding: 'utf-8' });
  return JSON.parse(content);
}
