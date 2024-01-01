import { loadSkills } from '$lib/server/skill';
import { loadArticles } from '$lib/server/article';

export async function load() {
  const skills = await loadSkills();
  const articles = await loadArticles();
  return { skills, articles };
}

export const prerender = true;
