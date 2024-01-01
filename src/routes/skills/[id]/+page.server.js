import { readFile } from 'fs/promises';

async function loadSkills() {
  const content = await readFile('data/skills.json', { encoding: 'utf-8' });
  return JSON.parse(content);
}

async function getSkillFromJson(skillId) {
  const skills = await loadSkills();
  return skills.find((skill) => skillId === skill.id);
}

export async function load({ params }) {
  const skillId = params.id;
  const skill = await getSkillFromJson(skillId);
  return { skill };
}

export const prerender = true;
