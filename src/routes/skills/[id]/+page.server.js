async function loadSkills() {
  return [
    {
      id: 'html',
      name: 'HTML',
      description: 'これはHTMLの詳細ページです'
    },
    {
      id: 'css',
      name: 'CSS',
      description: 'これはCSSの詳細ページです'
    }
  ];
}

async function getSkillFromDatabase(skillId) {
  const skills = await loadSkills();
  return skills.find((skill) => skillId === skill.id);
}

export async function load({ params }) {
  const skillId = params.id
  const skill = await getSkillFromDatabase(skillId);
  return { skill };
}
