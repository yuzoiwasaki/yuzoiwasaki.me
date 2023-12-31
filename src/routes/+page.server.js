import { readFile } from 'fs/promises';

async function loadSkills() {
  const content = await readFile('data/skills.json', { encoding: 'utf-8' });
  return JSON.parse(content);
}

async function loadArticles() {
  const content = await readFile('data/articles.json', { encoding: 'utf-8' });
  return JSON.parse(content);
}

export async function load() {
  const skills = await loadSkills();
  const articles = await loadArticles();
  return { skills, articles };
}

// export const prerender = true
