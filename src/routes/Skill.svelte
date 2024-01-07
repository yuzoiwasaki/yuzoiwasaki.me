<script>
  export let skills;
</script>

<section>
  <h2>Skills</h2>
  <div class="skills-container">
    {#each skills as skill}
      <div class="skill-card">
        <h3>{skill.name}</h3>
        <p>{skill.year}</p>
        <div class="skill-rating">
          {#each { length: skill.star } as _}
            <i class="fas fa-star"></i>
          {/each}
        </div>
        <a href="/skills/{skill.id}">Read More</a>
      </div>
    {/each}
  </div>
</section>

<style>
  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
  }

  .skill-card {
    max-width: 300px;
    padding: 1em;
    background-color: #f9f9f9;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin: 1em;
  }

  .skill-card h3 {
    color: #333;
  }

  .skill-card p {
    color: #555;
  }

  .skill-rating {
    margin-top: 0.5em;
  }

  .skill-rating i {
    font-size: 18px;
    color: #f8c200;
  }
</style>
