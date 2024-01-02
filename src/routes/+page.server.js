import { loadSkills } from '$lib/server/skill';
import { loadArticles } from '$lib/server/article';
import { loadTalks } from '$lib/server/talk';

export async function load() {
  const skills = await loadSkills();
  const articles = await loadArticles();
  const talks = await loadTalks();
  return { skills, articles, talks };
}

export const prerender = true;
